document.addEventListener("DOMContentLoaded", function () {

    const openButton = document.getElementById("openButton");
    const backgroundMusic = document.getElementById("backgroundMusic");

    // OPENING BUTTON

    openButton.addEventListener("click", function () {

        backgroundMusic.play().catch(error => {
            console.log("Audio belum dapat diputar:", error);
        });

        document.getElementById("graduation").scrollIntoView({
            behavior: "smooth"
        });

    });

});

// SCROLL TO NEXT SECTION

function scrollToMemories() {

    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });

}

// SCROLL TO SECTION 4

function scrollToStory() {

    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });

}

function scrollToLetter() {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
}

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

function scrollToChapter() {
    document.getElementById("chapter").scrollIntoView({
        behavior: "smooth"
    });
}