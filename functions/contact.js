// functions/contact.js
export async function onRequest(context) {
  const { request, env } = context;
  
  // Разрешаем CORS для всех методов
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  
  // Обработка OPTIONS запроса (preflight)
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders
    });
  }
  
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Method not allowed' 
    }), { 
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }
  
  try {
    const formData = await request.formData();
    const token = formData.get('cf-turnstile-response');
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone') || 'Not provided';
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Валидация
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'All required fields must be filled' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }
    
    // Проверка токена Turnstile
    if (!token) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Captcha token missing' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }
    
    const verifyData = new FormData();
    verifyData.append('secret', env.TURNSTILE_SECRET_KEY);
    verifyData.append('response', token);
    
    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: verifyData
    });
    
    const verifyResult = await verifyResponse.json();
    
    if (!verifyResult.success) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Invalid captcha. Please try again.' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }
    
    // ОТПРАВКА EMAIL через Email Routing на info@fonsalus.com
    const sendRequest = new Request('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'info@fonsalus.com', name: 'Fonsalus Team' }],
          },
        ],
        from: {
          email: 'info@fonsalus.com', // Отправляем с info@
          name: 'Fonsalus Contact Form',
        },
        reply_to: {
          email: email,
          name: name,
        },
        subject: `Contact Form: ${subject} from ${name}`,
        content: [
          {
            type: 'text/plain',
            value: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
            `,
          },
          {
            type: 'text/html',
            value: `
<h2>New Contact Form Submission</h2>
<table style="border-collapse: collapse; width: 100%;">
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Subject:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${subject}</td></tr>
</table>
<h3>Message:</h3>
<p style="padding: 12px; background: #f5f5f5; border-radius: 4px;">${message.replace(/\n/g, '<br>')}</p>
            `,
          },
        ],
      }),
    });
    
    const sendResponse = await fetch(sendRequest);
    
    if (!sendResponse.ok) {
      const errorText = await sendResponse.text();
      console.error('Email send failed:', errorText);
      throw new Error('Failed to send email');
    }
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Thank you! Your message has been sent. We\'ll get back to you within 24 hours.'
    }), {
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Something went wrong. Please try again later.' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }
}