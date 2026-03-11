// functions/contact.js - ПОЛНАЯ РАБОЧАЯ ВЕРСИЯ
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
    
    console.log('Form data received:', { name, email, subject });
    
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
    
    console.log('Verifying Turnstile token...');
    const verifyData = new FormData();
    verifyData.append('secret', env.TURNSTILE_SECRET_KEY);
    verifyData.append('response', token);
    
    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: verifyData
    });
    
    const verifyResult = await verifyResponse.json();
    console.log('Turnstile verification result:', verifyResult);
    
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
    
    // Формируем HTML письма
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    h2 { color: #7c6cff; border-bottom: 2px solid #7c6cff; padding-bottom: 10px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    td { padding: 10px; border: 1px solid #ddd; }
    td:first-child { font-weight: bold; background: #f5f5f5; width: 30%; }
    .message { background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #7c6cff; }
  </style>
</head>
<body>
  <div class="container">
    <h2>📬 New Contact Form Submission</h2>
    <table>
      <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
      <tr><td><strong>Subject:</strong></td><td>${subject}</td></tr>
    </table>
    <h3>💬 Message:</h3>
    <div class="message">${message.replace(/\n/g, '<br>')}</div>
    <p style="margin-top: 20px; font-size: 12px; color: #999;">Sent via fonsalus.com contact form</p>
  </div>
</body>
</html>`;
    
    const textContent = `Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}`;
    
    console.log('Sending email via Service binding to email-sender-worker...');
    
    // 🔥 ВЫЗЫВАЕМ EMAIL WORKER ЧЕРЕЗ SERVICE BINDING
    const emailResponse = await env['email-sender-worker'].fetch('https://email-sender-worker/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'info@fonsalus.com',
        subject: `Contact Form: ${subject} from ${name}`,
        html: htmlContent,
        text: textContent
      })
    });
    
    const emailResult = await emailResponse.json();
    console.log('Email worker response:', emailResult);
    
    if (!emailResult.success) {
      throw new Error('Failed to send email');
    }
    
    console.log('Email sent successfully!');
    
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