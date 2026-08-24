/* =====================================================
   RANDOM STARS / SHOOTING STARS
===================================================== */

function createShootingStar() {

    const star =
        document.createElement("div");

    star.className =
        "shooting-star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 55 + "%";

    document
        .getElementById("shooting-stars")
        .appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1500);
}


/* Shooting star appears randomly */

setInterval(() => {

    if (Math.random() > 0.35) {
        createShootingStar();
    }

}, 2500);


/* =====================================================
   FLIP CARD
===================================================== */

const card =
    document.getElementById("birthdayCard");

const flipButton =
    document.getElementById("flipButton");

flipButton.addEventListener(
    "click",
    () => {

        card.classList.add("flipped");

        /* tiny cosmic burst */

        createStarsBurst(
            window.innerWidth / 2,
            window.innerHeight / 2
        );
    }
);


/* =====================================================
   ENVELOPE
===================================================== */

const envelope =
    document.getElementById("envelope");

const surpriseButton =
    document.getElementById("surpriseButton");

const celebration =
    document.getElementById("celebration");


surpriseButton.addEventListener(
    "click",
    () => {

        envelope.classList.add("open");

        surpriseButton.innerText =
            "MAKE A WISH ✨";

        setTimeout(() => {

            celebration.classList.add("active");

            celebration.scrollIntoView({
                behavior: "smooth"
            });

            startCelebration();

        }, 1800);

    }
);


/* =====================================================
   CELEBRATION
===================================================== */

function startCelebration() {

    /* Confetti */

    for (
        let i = 0;
        i < 120;
        i++
    ) {

        setTimeout(() => {
            createConfetti();
        }, i * 20);

    }


    /* Fireworks */

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        setTimeout(() => {
            createFirework();
        }, i * 500);

    }


    /* Extra balloons */

    createExtraBalloons();
}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const piece =
        document.createElement("div");

    piece.className =
        "confetti-piece";

    const colors = [
        "#ffe5a0",
        "#c5b5ff",
        "#ff9ecb",
        "#8fd5ff",
        "#ffffff"
    ];

    piece.style.background =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];

    piece.style.left =
        Math.random() * 100 + "vw";

    piece.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    piece.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    document
        .getElementById("confetti")
        .appendChild(piece);

    setTimeout(() => {

        piece.remove();

    }, 6000);
}


/* =====================================================
   FIREWORKS
===================================================== */

function createFirework() {

    const firework =
        document.createElement("div");

    firework.className =
        "firework";

    firework.style.left =
        (15 + Math.random() * 70) + "vw";

    firework.style.top =
        (10 + Math.random() * 40) + "vh";

    document
        .getElementById("fireworks")
        .appendChild(firework);

    setTimeout(() => {

        firework.remove();

    }, 1200);
}


/* =====================================================
   COSMIC BURST
===================================================== */

function createStarsBurst(x, y) {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const star =
            document.createElement("div");

        star.innerHTML = "✦";

        star.style.position =
            "fixed";

        star.style.left =
            x + "px";

        star.style.top =
            y + "px";

        star.style.color =
            "#ffe7a0";

        star.style.pointerEvents =
            "none";

        star.style.zIndex =
            "200";

        star.style.fontSize =
            "12px";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            60 + Math.random() * 150;

        star.animate(

            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            ${Math.cos(angle) * distance}px,
                            ${Math.sin(angle) * distance}px
                        )
                        scale(1.5)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    1000 + Math.random() * 600,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }

        );

        document.body.appendChild(star);

        setTimeout(() => {

            star.remove();

        }, 1800);
    }
}


/* =====================================================
   EXTRA BALLOONS
===================================================== */

function createExtraBalloons() {

    const container =
        document.querySelector(".balloons");

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const balloon =
            document.createElement("div");

        balloon.className =
            "balloon";

        const colors = [
            "#6d4bc4",
            "#c99b40",
            "#d95d91",
            "#4576c5"
        ];

        balloon.style.background =
            `radial-gradient(
                circle at 30% 25%,
                white,
                ${colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ]}
            )`;

        balloon.style.left =
            Math.random() * 90 + "%";

        balloon.style.animationDelay =
            Math.random() * 5 + "s";

        balloon.style.transform =
            `scale(${0.6 + Math.random() * .6})`;

        container.appendChild(balloon);
    }
}


/* =====================================================
   PARALLAX SPACE EFFECT
===================================================== */

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX /
                window.innerWidth - 0.5);

        const y =
            (event.clientY /
                window.innerHeight - 0.5);

        document
            .querySelectorAll(".planet, .moon, .sun")
            .forEach((object, index) => {

                const strength =
                    10 + index * 5;

                object.style.marginLeft =
                    `${x * strength}px`;

                object.style.marginTop =
                    `${y * strength}px`;

            });
    }
);


/* =====================================================
   TOUCH PARALLAX
===================================================== */

document.addEventListener(
    "touchmove",
    (event) => {

        if (!event.touches[0]) return;

        const x =
            event.touches[0].clientX /
            window.innerWidth - 0.5;

        const y =
            event.touches[0].clientY /
            window.innerHeight - 0.5;

        document
            .querySelectorAll(".planet, .moon")
            .forEach((object, index) => {

                const strength =
                    5 + index * 4;

                object.style.transform =
                    `translate(
                        ${x * strength}px,
                        ${y * strength}px
                    )`;

            });
    },
    { passive: true }
);
