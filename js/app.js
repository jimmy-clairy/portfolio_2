// Effect slide
const btnToggle = document.querySelector(".btn-toggle")
const navSlider = document.querySelector(".nav-slider")
const navSliderLink = document.querySelectorAll(".nav-slider__link")

btnToggle.addEventListener("click", toggleNav)
navSliderLink.forEach(a => a.addEventListener("click", () => toggleNav()))

function toggleNav() {
    btnToggle.classList.toggle("active")
    navSlider.classList.toggle("active")
}

// Effect multiText
const typingEffect = new Typed(".intro__multiText", {
    strings: ["Coder", "Jimmy Clairy"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})