function fadeIn(element, delay = 0) {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition = `all 0.8s ease ${delay}s`;

    setTimeout(() => {

        element.style.opacity = "1";

        element.style.transform = "translateY(0)";

    }, 100);

}
