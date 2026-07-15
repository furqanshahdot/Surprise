// PASSWORD
function checkPassword() {
    const pass = document.getElementById("password").value;

    if (pass === "2406") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("mainWebsite").style.display = "block";

        // Start music
        const music = document.getElementById("bgMusic");
        music.play().catch(() => {});

        createHearts();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {
        alert("❌ Wrong Password!\n\n💌 Hint: When I messaged you!");
    }
}

// GIFT
function openGift() {

    const gift = document.getElementById("giftBox");

    gift.innerHTML = "💖";

    gift.style.transform = "scale(1.4) rotate(20deg)";

    setTimeout(() => {
        gift.style.display = "none";
        document.getElementById("surprise").style.display = "block";
        launchConfetti();

        document.getElementById("surprise").scrollIntoView({
            behavior: "smooth"
        });

    }, 900);

}

// FLOATING HEARTS
function createHearts() {

    const container = document.getElementById("hearts");

    const emojis = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "🌸",
        "🎀",
        "✨",
        "🧸"
    ];

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            20 + Math.random() * 30 + "px";

        heart.style.animationDuration =
            5 + Math.random() * 6 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 11000);

    }, 300);

}

// SIMPLE CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function launchConfetti() {

    particles = [];

    for (let i = 0; i < 180; i++) {

        particles.push({

            x: canvas.width / 2,

            y: canvas.height / 3,

            size: Math.random() * 8 + 4,

            speedX: (Math.random() - 0.5) * 10,

            speedY: Math.random() * -10 - 2,

            gravity: 0.2,

            color: [
                "#ff4d6d",
                "#ff85a2",
                "#ffd166",
                "#ffffff",
                "#ff99c8",
                "#ffc6ff"
            ][Math.floor(Math.random() * 6)]

        });

    }

    animateConfetti();

}

function animateConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {

        ctx.fillStyle = p.color;

        ctx.fillRect(
            p.x,
            p.y,
            p.size,
            p.size
        );

        p.x += p.speedX;
        p.y += p.speedY;

        p.speedY += p.gravity;

    });

    particles = particles.filter(p => p.y < canvas.height + 50);

    if (particles.length > 0) {
        requestAnimationFrame(animateConfetti);
    }

}