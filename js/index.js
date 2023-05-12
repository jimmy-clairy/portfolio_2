import { fetchData } from "./fetch/fetchData.js"
import { headerEffect, sliderNav, themeMode } from "./functions/functions.js"

const projets = await fetchData("../DB/data.json")
const skills = await fetchData("../DB/skills.json")

/** Create cards */
const cards = document.querySelector("#cards")
for (const projet of projets) {
    const cardClone = document.querySelector("#tmp-card").content.firstElementChild.cloneNode(true)
    cardClone.href = `./html/projet.html?id=${projet.id}`

    const img = cardClone.querySelector(".card__img")
    img.src = `./assets/img/${projet.img}`
    img.alt = `Projet ${projet.name}`

    const heading = cardClone.querySelector(".card__heading")
    heading.innerText = `${projet.name}`

    const subHeading = cardClone.querySelector(".card__p")
    subHeading.innerText = projet.languages

    cards.append(cardClone)
}
/** Create cards skill */
const skillContent = document.querySelector("#skill__content")
for (const skill of skills) {
    const skillClone = document.querySelector("#skill__card").content.firstElementChild.cloneNode(true)
    const skillImg = skillClone.querySelector(".skill__img")
    skillImg.src = `./assets/icon/${skill.icon}`
    skillImg.alt = `Icon ${skill.name}`
    const skillTxt = skillClone.querySelector(".skill__txt")
    skillTxt.innerText = skill.name
    skillContent.append(skillClone)
}

/** ThemeMode  */
themeMode()
/** Nav-slider Effect */
sliderNav()
/** Header Effect */
headerEffect()

/** Nav Effect */
const sections = document.querySelectorAll('.section')
const links = document.querySelectorAll('.nav__link')

const options = {
    threshold: "0.45", // 0.6 === 60% of the section should be visible
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

/** Active all shape > 1000px  */
if (window.innerWidth > 1000) {
    let shape = document.querySelectorAll(".shape-2")
    // console.log(shape);
    shape.forEach((a) => a.classList.add('active-shape'))
}

/** Effect slide card */
const ratio = 0
const options1 = {
    root: null,
    rootMargin: "100px",
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

/** Multi Text */
let typingEffect = new Typed(".multiText", {
    strings: ["Jimmy Clairy", "Développeur"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})

/** Active parralax > 1000px */
if (window.innerWidth > 1000) {
    VanillaTilt.init(document.querySelectorAll(".parralax"), {
        max: 15,
        speed: 350
    });
}