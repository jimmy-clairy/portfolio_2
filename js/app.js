import { fetchData } from "./fetch/fetchData.js"

const projets = await fetchData("../DB/data.json")

const cards = document.querySelector("#cards")

for (const projet of projets) {
    const cardClone = document.querySelector("#tmp-card").content.firstElementChild.cloneNode(true)
    cardClone.href = `./html/projet.html?id=${projet.id}`

    const img = cardClone.querySelector(".card__img")
    img.src = `./pictures/img/${projet.img}`
    img.alt = `Projet ${projet.name}`

    const heading = cardClone.querySelector(".card__heading")
    heading.innerText = `${projet.name}`

    const subHeading = cardClone.querySelector(".card__p")
    subHeading.innerText = projet.languages

    cards.append(cardClone)
}

const skills = await fetchData("../DB/skills.json")

const skillContent = document.querySelector("#skill__content")
for (const skill of skills) {
    const skillClone = document.querySelector("#skill__card").content.firstElementChild.cloneNode(true)
    const skillImg = skillClone.querySelector(".skill__img")
    skillImg.src = `./pictures/icon/${skill.icon}`
    skillImg.alt = `Icon ${skill.name}`
    const skillTxt = skillClone.querySelector(".skill__txt")
    skillTxt.innerText = skill.name
    skillContent.append(skillClone)
}

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

// Effect nav ---------------------------------------------------------------------------------------------
const sections = document.querySelectorAll('.section')
const links = document.querySelectorAll('.nav__link')

const options = {
    threshold: "0.6", // 0.6 === 60% of the section should be visible
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            // console.log(e.target.id)
            // SECTION INDICATOR
            links.forEach(link => {
                if (e.target.id === link.dataset.nav) {
                    link.classList.add("active")
                } else {
                    link.classList.remove("active")
                }
            })
        }
    })

}, options)
sections.forEach(section => {
    observer.observe(section)
})


// Active all shape > 1000px ---------------------------------------------------------------------------------------------
if (window.innerWidth > 1000) {
    let shape = document.querySelectorAll(".shape-2")
    // console.log(shape);
    shape.forEach((a) => a.classList.add('active-shape'))
}

// Effect slide card ---------------------------------------------------------------------------------------------
const ratio = 0
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
    })
}
const observer1 = new IntersectionObserver(handleIntersect, options1)
document.querySelectorAll('.reveal').forEach((r) => {
    observer1.observe(r)
})
document.querySelectorAll('.reveal-up').forEach((r) => {
    observer1.observe(r)
})

// DarkMode -------------------------------------------------------------------------------------------------------
const theme = document.querySelector('.theme')
const body = document.querySelector('body')
const h3 = document.querySelectorAll('h3')
const card = document.querySelectorAll('.card')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')

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
    header.classList.add('dark')
}

function lightMode() {
    localStorage.setItem('darkMode', 'light')
    sun.setAttribute('hidden', '')
    moon.removeAttribute('hidden')
    body.classList.remove('dark')
    card.forEach(c => c.classList.remove('dark'))
    h3.forEach(h => h.classList.remove('dark'))
    header.classList.remove('dark')
}

let typingEffect = new Typed(".multiText", {
    strings: ["Jimmy Clairy", "Développeur"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})
// Active parralax > 1000px ---------------------------------------------------------------------------------------------
if (window.innerWidth > 1000) {
    VanillaTilt.init(document.querySelectorAll(".parralax"), {
        max: 15,
        speed: 350
    });
}