export default async (req) => {
  const { topic, content } = JSON.parse(req.body);

  const prompt = `
Sahifa mavzusi: ${topic}

Quyidagi matn asosida
faqat shu mavzuga oid,
2-3 jumlalik qisqa AI xulosa yoz:

${content}
`;

  const response = await fetch(
    "https://api-inference.huggingface.co/models/google/flan-t5-base",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: prompt
      })
    }
  );

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      summary: data[0]?.generated_text || "AI xulosa mavjud emas"
    })
  };
};