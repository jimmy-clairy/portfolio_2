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

// Effect slide card ---------------------------------------------------------------------------------------------
const ratio = 0.03
const options1 = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        } else {

        }
        console.log(entry.intersectionRatio);
    })
}
const observer1 = new IntersectionObserver(handleIntersect, options1)
document.querySelectorAll('.reveal-up').forEach((r) => {
    observer1.observe(r)
})

// DarkMode -------------------------------------------------------------------------------------------------------
const theme = document.querySelector('.theme')
const body = document.querySelector('body')
const h3 = document.querySelectorAll('h3')
const card = document.querySelectorAll('.card')
const headerActive = document.querySelector('.header')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
console.log(sun);

const themeStorage = localStorage.getItem('darkMode')
if (themeStorage === 'dark') {
    darkMode()
} else {
    lightMode()
}

theme.addEventListener('click', () => {
    const themeStorage = localStorage.getItem('darkMode')
    if (themeStorage === 'dark') {
        lightMode()
    } else {
        darkMode()
    }
})

function darkMode() {
    localStorage.setItem('darkMode', 'dark')
    moon.setAttribute('hidden', '')
    sun.removeAttribute('hidden')
    body.classList.add('dark')
    card.forEach(c => c.classList.add('dark'))
    h3.forEach(h => h.classList.add('dark'))
    headerActive.classList.add('dark')
}

function lightMode() {
    localStorage.setItem('darkMode', 'light')
    sun.setAttribute('hidden', '')
    moon.removeAttribute('hidden')
    body.classList.remove('dark')
    card.forEach(c => c.classList.remove('dark'))
    h3.forEach(h => h.classList.remove('dark'))
    headerActive.classList.remove('dark')
}