export default async (req) => {
  const { topic, content } = JSON.parse(req.body);

  const prompt = `
Sen ${topic} bo‘yicha mutaxassis AI’san.
Quyidagi sahifa matni asosida
2-3 jumladan iborat,
faqat shu mavzuga oid
qisqa AI xulosa yoz.
${content}
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      summary: data.choices[0].message.content
    })
  };
};