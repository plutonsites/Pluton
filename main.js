document.addEventListener("DOMContentLoaded", async () => {
  const topicMeta = document.querySelector('meta[name="ai-topic"]');
  if (!topicMeta) return;

const API_KEY = "sk-xxxx";

  const topic = topicMeta.content;
  const content = document.querySelector("main").innerText;

  const res = await fetch("/.netlify/functions/ai-summary", {
    method: "POST",
    body: JSON.stringify({ topic, content })
  });

  const data = await res.json();
  document.getElementById("ai-summary").innerText = data.summary;
});