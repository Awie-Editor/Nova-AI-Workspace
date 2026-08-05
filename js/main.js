// Nova AI Workspace Main Controller
document.addEventListener("DOMContentLoaded", function () {

    console.log("Nova AI Workspace Loaded");

});
const buttons = document.querySelectorAll("button");


buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});
const hero = document.querySelector(".hero");


hero.style.opacity = "0";

hero.style.transform = "translateY(40px)";


setTimeout(() => {

    hero.style.transition = "1s";

    hero.style.opacity = "1";

    hero.style.transform = "translateY(0)";

}, 300);
const cards = document.querySelectorAll(".mini-card");


cards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition = "0.6s";

    setTimeout(() => {

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, 500 + (index * 250));

});
const dashboard = document.querySelector(".dashboard-preview");


let direction = 1;


setInterval(() => {

    dashboard.style.transform = `translateY(${direction * 8}px)`;

    dashboard.style.transition = "2s ease-in-out";

    direction *= -1;

}, 2000);
const counters = document.querySelectorAll(".mini-card h3");


counters.forEach(counter => {

    const target = parseFloat(counter.textContent);

    let current = 0;

    const step = target / 80;

    const timer = setInterval(() => {

        current += step;

        if (current >= target) {

            counter.textContent = counter.textContent.includes("%")
                ? target + "%"
                : target.toFixed(1) + "K";

            clearInterval(timer);

        } else {

            counter.textContent = counter.textContent.includes("%")
                ? Math.floor(current) + "%"
                : current.toFixed(1) + "K";

        }

    }, 20);

});
setTimeout(() => {

    const notification = document.createElement("div");

    notification.innerHTML = "🚀 Welcome to Nova AI Workspace";

    notification.style.position = "fixed";

    notification.style.top = "30px";

    notification.style.right = "30px";

    notification.style.padding = "15px 25px";

    notification.style.background = "#6c63ff";

    notification.style.color = "white";

    notification.style.borderRadius = "12px";

    notification.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    notification.style.zIndex = "9999";

    notification.style.opacity = "0";

    notification.style.transition = "0.5s";

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.style.opacity = "1";

    }, 100);

    setTimeout(() => {

        notification.style.opacity = "0";

        setTimeout(() => {

            notification.remove();

        }, 500);

    }, 3500);

}, 1200);
cards.forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});
const heroButtons = document.querySelectorAll(".hero-buttons button");


heroButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        }, 150);

    });

});
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
smoothScroll();
fadeIn(hero);
cards.forEach(card => {

    slideUp(card);

});
floating(dashboard);
buttons.forEach(button => {

    scaleHover(button);

});
cards.forEach(card => {

    tilt(card);

});
const logo = document.querySelector(".logo");


if (logo) {

    pulseGlow(logo);

              }
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});
