// Tugash vaqti (misol: 2026-yil 1-yanvar 00:00:00)
const tugashVaqti = new Date("2026-01-01T00:00:00").getTime();

function teskariSoat() {
    const hozir = new Date().getTime();
    const farq = tugashVaqti - hozir;

    if (farq <= 0) {
        document.getElementById("countdown").textContent = "00:00:00";
        clearInterval(interval);
        return;
    }

    const soat = Math.floor((farq / (1000 * 60 * 60)) % 24);
    const minut = Math.floor((farq / (1000 * 60)) % 60);
    const soniya = Math.floor((farq / 1000) % 60);
    const kun = Math.floor(farq / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").textContent =
        kun + " kun " +
        String(soat).padStart(2,'0') + ":" +
        String(minut).padStart(2,'0') + ":" +
        String(soniya).padStart(2,'0');
}

teskariSoat();
const interval = setInterval(teskariSoat, 1000);