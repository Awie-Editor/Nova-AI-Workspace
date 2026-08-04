function fadeIn(element, delay = 0) {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition = `all 0.8s ease ${delay}s`;

    setTimeout(() => {

        element.style.opacity = "1";

        element.style.transform = "translateY(0)";

    }, 100);

}
function floatAnimation(element) {

    let direction = 1;

    setInterval(() => {

        element.style.transform = `translateY(${direction * 8}px)`;

        element.style.transition = "2s ease-in-out";

        direction *= -1;

    }, 2000);

}
function popAnimation(element) {

    element.addEventListener("click", () => {

        element.style.transform = "scale(0.95)";

        setTimeout(() => {

            element.style.transform = "scale(1)";

        }, 150);

    });

                             }
function hoverLift(element) {

    element.addEventListener("mouseenter", () => {

        element.style.transform = "translateY(-10px)";

        element.style.boxShadow = "0 20px 40px rgba(108,99,255,0.35)";

        element.style.transition = "0.35s ease";

    });


    element.addEventListener("mouseleave", () => {

        element.style.transform = "translateY(0)";

        element.style.boxShadow = "";

    });

          }
function slideFromLeft(element, delay = 0) {

    element.style.opacity = "0";

    element.style.transform = "translateX(-60px)";

    element.style.transition = `all 0.8s ease ${delay}s`;

    setTimeout(() => {

        element.style.opacity = "1";

        element.style.transform = "translateX(0)";

    }, 100);

      }
function slideFromRight(element, delay = 0) {

    element.style.opacity = "0";

    element.style.transform = "translateX(60px)";

    element.style.transition = `all 0.8s ease ${delay}s`;

    setTimeout(() => {

        element.style.opacity = "1";

        element.style.transform = "translateX(0)";

    }, 100);

}
function zoomIn(element, delay = 0) {

    element.style.opacity = "0";

    element.style.transform = "scale(0.7)";

    element.style.transition = `all 0.6s ease ${delay}s`;

    setTimeout(() => {

        element.style.opacity = "1";

        element.style.transform = "scale(1)";

    }, 100);

}
function pulse(element) {

    element.animate(

        [

            { transform: "scale(1)" },

            { transform: "scale(1.08)" },

            { transform: "scale(1)" }

        ],

        {

            duration: 800,

            iterations: 1,

            easing: "ease-in-out"

        }

    );

          }
function float(element) {

    element.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-10px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 2000,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );

              }
function shake(element) {

    element.animate(
        [
            { transform: "translateX(0px)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(0px)" }
        ],
        {
            duration: 400,
            iterations: 1,
            easing: "ease-in-out"
        }
    );

}
function fadeIn(element) {

    element.animate(
        [
            { opacity: 0 },
            { opacity: 1 }
        ],
        {
            duration: 1000,
            iterations: 1,
            easing: "ease-in-out"
        }
    );

}
function zoomIn(element) {

    element.animate(
        [
            { transform: "scale(0.8)", opacity: 0 },
            { transform: "scale(1)", opacity: 1 }
        ],
        {
            duration: 700,
            iterations: 1,
            easing: "ease-out"
        }
    );

}
function slideUp(element) {

    element.animate(
        [
            { transform: "translateY(40px)", opacity: 0 },
            { transform: "translateY(0px)", opacity: 1 }
        ],
        {
            duration: 800,
            iterations: 1,
            easing: "ease-out"
        }
    );

          }
function rotate(element) {

    element.animate(
        [
            { transform: "rotate(0deg)" },
            { transform: "rotate(5deg)" },
            { transform: "rotate(0deg)" }
        ],
        {
            duration: 600,
            iterations: 1,
            easing: "ease-in-out"
        }
    );

      }
function glow(element) {

    element.animate(
        [
            { filter: "brightness(1)" },
            { filter: "brightness(1.4)" },
            { filter: "brightness(1)" }
        ],
        {
            duration: 1200,
            iterations: 1,
            easing: "ease-in-out"
        }
    );

          }
function blurIn(element) {

    element.animate(
        [
            { filter: "blur(8px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1 }
        ],
        {
            duration: 900,
            iterations: 1,
            easing: "ease-out"
        }
    );

      }
function bounce(element) {

    element.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-20px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 600,
            iterations: 1,
            easing: "ease-out"
        }
    );

}
function flip(element) {

    element.animate(
        [
            { transform: "rotateY(90deg)", opacity: 0 },
            { transform: "rotateY(0deg)", opacity: 1 }
        ],
        {
            duration: 800,
            iterations: 1,
            easing: "ease-out"
        }
    );

  }
function pulseGlow(element) {

    element.animate(
        [
            { transform: "scale(1)", boxShadow: "0 0 0px" },
            { transform: "scale(1.05)", boxShadow: "0 0 20px" },
            { transform: "scale(1)", boxShadow: "0 0 0px" }
        ],
        {
            duration: 1000,
            iterations: 1,
            easing: "ease-in-out"
        }
    );

          }
function slideLeft(element) {

    element.animate(
        [
            { transform: "translateX(50px)", opacity: 0 },
            { transform: "translateX(0px)", opacity: 1 }
        ],
        {
            duration: 800,
            iterations: 1,
            easing: "ease-out"
        }
    );

      }
function slideRight(element) {

    element.animate(
        [
            { transform: "translateX(-50px)", opacity: 0 },
            { transform: "translateX(0px)", opacity: 1 }
        ],
        {
            duration: 800,
            iterations: 1,
            easing: "ease-out"
        }
    );

}
function scaleHover(element) {

    element.addEventListener("mouseenter", () => {

        element.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.05)" }
            ],
            {
                duration: 300,
                fill: "forwards",
                easing: "ease-out"
            }
        );

    });


    element.addEventListener("mouseleave", () => {

        element.animate(
            [
                { transform: "scale(1.05)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 300,
                fill: "forwards",
                easing: "ease-out"
            }
        );

    });

              }
function rotateHover(element) {

    element.addEventListener("mouseenter", () => {

        element.animate(
            [
                { transform: "rotate(0deg)" },
                { transform: "rotate(3deg)" }
            ],
            {
                duration: 300,
                fill: "forwards",
                easing: "ease-out"
            }
        );

    });


    element.addEventListener("mouseleave", () => {

        element.animate(
            [
                { transform: "rotate(3deg)" },
                { transform: "rotate(0deg)" }
            ],
            {
                duration: 300,
                fill: "forwards",
                easing: "ease-out"
            }
        );

    });

}
function smoothScroll() {

    document.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

              }
function countUp(element, target) {

    let count = 0;

    const interval = setInterval(() => {

        count++;

        element.textContent = count;


        if (count >= target) {

            clearInterval(interval);

        }

    }, 20);

        }
function colorPulse(element) {

    element.animate(
        [
            { opacity: 1 },
            { opacity: 0.7 },
            { opacity: 1 }
        ],
        {
            duration: 1500,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );

}
function shakeHover(element) {

    element.addEventListener("mouseenter", () => {

        element.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-5px)" },
                { transform: "translateX(5px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 300,
                easing: "ease-in-out"
            }
        );

    });

}
function tilt(element) {

    element.addEventListener("mousemove", (e) => {

        const rect = element.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;


        const rotateX = (y - rect.height / 2) / 15;
        const rotateY = (x - rect.width / 2) / 15;


        element.style.transform =
            `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

    });


    element.addEventListener("mouseleave", () => {

        element.style.transform =
            "rotateX(0) rotateY(0)";

    });

}
function cursorGlow(element) {

    element.addEventListener("mousemove", (e) => {

        element.style.background =
        `radial-gradient(circle at ${e.offsetX}px ${e.offsetY}px, rgba(255,255,255,0.25), transparent 40%)`;

    });


    element.addEventListener("mouseleave", () => {

        element.style.background = "";

    });

}
function parallax(element, speed = 0.3) {

    window.addEventListener("scroll", () => {

        const offset = window.scrollY * speed;

        element.style.transform =
            `translateY(${offset}px)`;

    });

}
function rotate360(element) {

    element.animate(
        [
            { transform: "rotate(0deg)" },
            { transform: "rotate(360deg)" }
        ],
        {
            duration: 1200,
            iterations: 1,
            easing: "ease-in-out"
        }
    );

}
function fadeOut(element) {

    element.animate(
        [
            { opacity: 1 },
            { opacity: 0 }
        ],
        {
            duration: 700,
            iterations: 1,
            easing: "ease-in-out"
        }
    );

}
function expand(element) {

    element.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.1)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 500,
            iterations: 1,
            easing: "ease-in-out"
        }
    );

             }
function heartbeat(element) {

    element.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 1200,
            iterations: 1,
            easing: "ease-in-out"
        }
    );

          }
function loading(element) {

    element.animate(
        [
            { opacity: 0.5 },
            { opacity: 1 },
            { opacity: 0.5 }
        ],
        {
            duration: 1000,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );

}
