LottieInteractivity.create({
    player: "#hero-section",
    mode: "scroll",
    actions: [
        {
            visibility: [0, 1],
            type: "seek",
            frames: [-120, 120],
        },
    ],
});

LottieInteractivity.create({
    player: "#buy-box",
    mode: "cursor",
    actions: [
        {
            position: { x: [0.5, 0.5], y: [0.5, 0.5] },
            type: "hover",
            frames: [0, 120],
        },
    ],
});

LottieInteractivity.create({
    player: "#reviews",
    mode: "scroll",
    actions: [
        {
            visibility: [0, 1],
            type: "seek",
            frames: [-100, 300],
        },
    ],
});

// Informative Carousel Section
const imageContainers = document.querySelectorAll(".image-container");
const textElements = document.querySelectorAll(".carousel-text");

function showText(textId) {
    textElements.forEach((text) => {
        text.classList.remove("active");
    });
    document.getElementById(textId + "-text").classList.add("active");
}

function showDefaultText() {
    textElements.forEach((text) => {
        text.classList.remove("active");
    });
    document.getElementById("default-text").classList.add("active");
}

imageContainers.forEach((container) => {
    container.addEventListener("mouseenter", () => {
        const textType = container.getAttribute("data-text");
        showText(textType);
    });

    container.addEventListener("mouseleave", () => {
        showDefaultText();
    });
});
