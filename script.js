
const frame = document.querySelector(".image-p");

let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;

frame.addEventListener("mousedown", (e) => {
    isDragging = true;
    frame.classList.add("dragging");

    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    currentX = e.clientX - startX;
    currentY = e.clientY - startY;

    // Limita o movimento
    currentX = Math.max(-500, Math.min(500, currentX));
    currentY = Math.max(-200, Math.min(200, currentY));

    frame.style.transform = `translate(${currentX}px, ${currentY}px)`;
});

document.addEventListener("mouseup", () => {
    if (!isDragging) return;

    isDragging = false;
    frame.classList.remove("dragging");

    currentX = 0;
    currentY = 0;

    frame.style.transform = "translate(0,0)";
});

const lenis = new Lenis({
    duration: 1.8,
    smoothWheel: true,
    wheelMultiplier: 1,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.getElementById("btnSobre").addEventListener("click", (e) => {
    e.preventDefault();

    lenis.scrollTo("#sobre", {
        duration: 2,
        easing: (t) => 1 - Math.pow(1 - t, 4)
    });
});

VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 10,
    speed: 500,
    perspective: 1500,
    scale: 1.03,
    glare: true,
    "max-glare": 0.18,
    gyroscope: true
});

VanillaTilt.init(document.querySelectorAll(".hero-mid"), {
    max: 10,
    speed: 600,
    perspective: 1500,
    scale: 1.03,
    glare: true,
    "max-glare": 0,
    gyroscope: true
});

VanillaTilt.init(document.querySelectorAll(".stat"), {
    max: 10,
    speed: 600,
    perspective: 1500,
    scale: 1.03,
    glare: true,
    "max-glare": 0,
    gyroscope: true
});