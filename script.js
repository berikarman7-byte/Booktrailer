// КНОПКА "ОТКРЫТЬ ИСТОРИЮ"

const startButton = document.getElementById("startButton");


startButton.addEventListener("click", function () {

    document
        .getElementById("about")
        .scrollIntoView({

            behavior: "smooth"

        });

});




// КНОПКА "ЗАПОМНИТЬ"

const memoryButton = document.getElementById("memoryButton");

const message = document.getElementById("message");


memoryButton.addEventListener("click", function () {

    message.innerHTML =
        "Некоторые истории действительно остаются с нами навсегда.";

    memoryButton.innerHTML =
        "ЗАПОМНЕНО ✓";

});




// АНИМАЦИЯ КАРТОЧЕК

const cards = document.querySelectorAll(".card");


// Сначала делаем карточки невидимыми

cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

});




// Проверяем появление карточек

window.addEventListener("scroll", function () {

    cards.forEach(function (card) {

        const position =
            card.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;


        if (position < screenHeight - 100) {

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

            card.style.transition =
                "0.8s";

        }

    });

});




// ПРОВЕРЯЕМ КАРТОЧКИ СРАЗУ

window.dispatchEvent(
    new Event("scroll")
);
