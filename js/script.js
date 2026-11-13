// BACKGROUND MUSIC

document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("backgroundMusic");

    music.volume = 0.5;

    // Mencoba memutar musik saat website dibuka
    music.play().catch(() => {

        console.log("Menunggu interaksi pengunjung untuk memutar musik.");

    });

    // Memulai musik saat pengunjung pertama kali berinteraksi
    function startMusic() {

        music.play().then(() => {

            console.log("Music berhasil diputar!");

            document.removeEventListener("click", startMusic);
            document.removeEventListener("touchstart", startMusic);
            document.removeEventListener("scroll", startMusic);

        }).catch(error => {

            console.log("Musik belum dapat diputar:", error);

        });

    }

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);
    document.addEventListener("scroll", startMusic);

});

// OPEN LETTER

document.addEventListener("DOMContentLoaded", function () {

    const letterButton = document.getElementById("letterButton");
    const letterPaper = document.getElementById("letterPaper");

    letterButton.addEventListener("click", function () {

        letterPaper.classList.toggle("show");

        if (letterPaper.classList.contains("show")) {
            letterButton.textContent = "Close Your Letter ♡";

            setTimeout(function () {
                letterPaper.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 200);

        } else {
            letterButton.textContent = "Open Your Letter ♡";
        }

    });

});

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}