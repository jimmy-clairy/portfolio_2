import { fetchData } from "./fetch/fetchData.js"

const id = new URL(window.location).searchParams.get("id")

const projets = await fetchData("../DB/data.json")
const projet = projets.find(p => p.id === Number(id))

const titleHead = document.querySelector("title")
titleHead.innerText = `Jimmy Clairy | ${projet.name}`

const metaDesc = document.querySelector("meta[name='description']")
metaDesc.content = `Projet ${projet.name}`

const imgUrl = document.querySelector(".big-card__site")
imgUrl.href = projet.url

const img = document.querySelector(".big-card__img")
img.src = `../pictures/img/${projet.img}`
img.alt = `Projet ${projet.name}`

const heading = document.querySelector(".big-card__heading")
heading.innerText = projet.name

const description = document.querySelector(".big-card__p")
description.innerHTML = projet.description

const btnSite = document.querySelector(".btn-site")
btnSite.href = projet.url

const btnGit = document.querySelector(".btn-git")
btnGit.href = projet.urlGit

const lighthouseMobile = document.querySelector(".lighthouse__mobile")
lighthouseMobile.src = `../pictures/lighthouse/${projet.imgLighthouse[0]}`

const lighthouseDesktop = document.querySelector(".lighthouse__desktop")
lighthouseDesktop.src = `../pictures/lighthouse/${projet.imgLighthouse[1]}`

const skillContent = document.querySelector("#skill__content")

for (const icon of projet.icon) {
    console.log(icon);
    const cardClone = document.querySelector("#tmp-card-skill").content.firstElementChild.cloneNode(true)
    const skillImg = cardClone.querySelector(".skill__img")
    skillImg.src = `../pictures/icon/${icon.img}`
    const skillTxt = cardClone.querySelector(".skill__txt")
    skillTxt.innerText = icon.name
    skillContent.append(cardClone)
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

// Effect slide ---------------------------------------------------------------------------------------------
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
