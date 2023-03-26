// Effect nav-slider ---------------------------------------------------------------------------------------------
const btnToggle = document.querySelector(".btn-toggle")
const navSlider = document.querySelector(".nav-slider")
const navSliderLink = document.querySelectorAll(".nav-slider__link")

btnToggle.addEventListener("click", toggleNav)
navSliderLink.forEach(a => a.addEventListener("click", () => toggleNav()))

function toggleNav() {
    btnToggle.classList.toggle("active")
    navSlider.classList.toggle("active")
}

// Effect header ---------------------------------------------------------------------------------------------
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > 20) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})