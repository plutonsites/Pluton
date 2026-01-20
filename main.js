async function fetchAISummary(pageText) {
  try {
    const response = await fetch('/.netlify/functions/getSummary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: pageText })
    });

    const data = await response.json();
    return data.summary;
  } catch (error) {
    console.error('AI xulosa olishda xatolik:', error);
    return 'AI xulosa olishda xatolik yuz berdi.';
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Sahifadagi asosiy matnni olish
  let pageText = '';
  const contentElement = document.querySelector('main') || document.body; 
  pageText = contentElement.innerText;

  // 2. AI xulosani olish
  const summary = await fetchAISummary(pageText);

  // 3. Xulosani sahifaga chiqarish
  const summaryDiv = document.getElementById('ai-summary-text');
  if (summaryDiv) summaryDiv.textContent = summary;
});