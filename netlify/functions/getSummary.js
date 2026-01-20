import fetch from 'node-fetch';

export async function handler(event, context) {
  try {
    const { text } = JSON.parse(event.body);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Ushbu matnni qisqa va aniq, faqat sahifa mavzusiga oid xulosaga aylantir: ${text}`
          }
        ]
      })
    });

    const data = await response.json();
    const summary = data.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ summary })
    };
  } catch (error) {
    console.error('OpenAI bilan ishlashda xatolik:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ summary: 'AI xulosa olishda xatolik yuz berdi.' })
    };
  }
}