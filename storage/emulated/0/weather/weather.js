const API_KEY = "840a8ec0caec0104a8633e901bdd873b";

function getIcon(w){
  w=w.toLowerCase();
  if(w.includes("rain")) return "🌧️";
  if(w.includes("snow")) return "❄️";
  if(w.includes("cloud")) return "☁️";
  if(w.includes("wind")) return "💨";
  if(w.includes("clear")) return "☀️";
  return "🌫️";
}

function uzDesc(w){
  w=w.toLowerCase();
  if(w.includes("rain")) return "&#160;";
  if(w.includes("snow")) return "&#160;";
  if(w.includes("cloud")) return "&#160;";
  if(w.includes("wind")) return "&#160;";
  if(w.includes("clear")) return "&#160;";
  return "Nomaʼlum";
}

window.loadWeather = function(selector, city="Toshkent"){
  const el = document.querySelector(selector);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},UZ&units=metric&appid=${API_KEY}`)
    .then(r=>r.json())
    .then(d=>{
      el.innerHTML = `
        ${getIcon(d.weather[0].main)}
        ${Math.round(d.main.temp)}°C
        ${uzDesc(d.weather[0].main)}
      `;
    });
};