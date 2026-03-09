// functions/contact.js
export async function onRequest(context) {
  const { request, env } = context;
  
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
  
  try {
    const formData = await request.formData();
    const token = formData.get('cf-turnstile-response');
    
    // Проверка токена с использованием секретного ключа из переменных окружения
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
        error: 'Invalid captcha' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Здесь можно отправить email или сохранить в базу данных
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // TODO: Отправить email через Email API
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Thank you! We\'ll get back to you soon.'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}