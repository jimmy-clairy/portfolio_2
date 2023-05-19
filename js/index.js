import { fetchData } from "./fetch/fetchData.js"
import { headerEffect, sliderNav, themeMode } from "./functions/functions.js"

const projets = await fetchData("../DB/data.json")
const skills = await fetchData("../DB/skills.json")

/** ThemeMode  */
themeMode()

/** Header Effect */
headerEffect()

/** Nav-slider Effect */
sliderNav()

/** Nav Effect */
const sections = document.querySelectorAll('.section')
const links = document.querySelectorAll('.nav__link')

const options = {
    threshold: "0.45", // 0.45 === 45% of the section should be visible
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

/** Multi Text */
let typingEffect = new Typed(".multiText", {
    strings: ["Jimmy Clairy", "Développeur"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})

const cards = document.querySelector("#cards")
/** Create cards */
function createCards(projets) {
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
}
createCards(projets)

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

/** Create an array whit all projets Javascrpit */
let projetJS = []
for (const projet of projets) {
    if (projet.icon.find(i => i.name === 'Javascript') !== undefined) {
        projetJS.push(projet)
    }
}

const btn = document.querySelector('.btn__all')
btn.addEventListener('click', () => {
    if (btn.textContent === 'Javascript') {
        btn.innerText = 'All'
        cards.innerHTML = ''
        createCards(projetJS);
    } else {
        btn.innerText = 'Javascript'
        cards.innerHTML = ''
        createCards(projets);
    }
    parralax()
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

/** Active parralax > 1000px */
function parralax() {
    if (window.innerWidth > 1000) {
        VanillaTilt.init(document.querySelectorAll(".parralax"), {
            max: 15,
            speed: 350
        });
    }
}
parralax()