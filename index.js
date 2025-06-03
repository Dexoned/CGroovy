// Slider(all Slides in a container)
const slider = document.querySelector(".slider");
const trail = document.querySelectorAll(".trail div");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let value = 0; // 0, 20, 40, 60, 80
let trailValue = 0;
let interval = 4000;
let start;

// Move slider and update trail
function move(S, T) {
    slider.style.transform = `translateX(-${S}%)`;
    trail.forEach((dot, i) => dot.classList.toggle("active", i === T));
}

// Update trailValue based on value
function trailUpdate() {
    trailValue = value / 20;
}

// Slide forward/back
function slide(condition) {
    clearInterval(start);
    if (condition === "increase") {
        value = value === 80 ? 0 : value + 20;
    } else {
        value = value === 0 ? 80 : value - 20;
    }
    trailUpdate();
    move(value, trailValue);
    start = setInterval(() => slide("increase"), interval);
}

// Next/Prev button
nextButton.addEventListener("click", () => slide("increase"));
prevButton.addEventListener("click", () => slide("decrease"));

// Trail click
trail.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
        clearInterval(start);
        value = idx * 20;
        trailUpdate();
        move(value, trailValue);
        start = setInterval(() => slide("increase"), interval);
    });
});

// Auto slide
start = setInterval(() => slide("increase"), interval);
