import { fetchData } from "./fetch/fetchData.js"
import { headerEffect, sliderNav, themeMode } from "./functions/functions.js"

/** ThemeMode */
themeMode()
/** Nav-slider Effect */
sliderNav()
/** Header Effect */
headerEffect()

/** Recup id in url */
const id = new URL(window.location).searchParams.get("id")

const projets = await fetchData("../DB/data.json")
const projet = projets.find(p => p.id === Number(id))

/** Create card */
const titleHead = document.querySelector("title")
titleHead.innerText = `Jimmy Clairy | ${projet.name}`

const metaDesc = document.querySelector("meta[name='description']")
metaDesc.content = `Projet ${projet.name}`

const imgUrl = document.querySelector(".big-card__site")
imgUrl.href = projet.url

const img = document.querySelector(".big-card__img")
img.src = `../assets/img/${projet.img}`
img.alt = `Projet ${projet.name}`

const heading = document.querySelector(".big-card__heading")
heading.innerText = projet.name

const description = document.querySelector(".big-card__p")
description.innerHTML = projet.description

const btnSite = document.querySelector(".btn-site")
btnSite.href = projet.url

const btnGit = document.querySelector(".btn-git")
btnGit.href = projet.urlGit

if (projet.imgLighthouse) {
    const lighthouseMobile = document.querySelector(".lighthouse__mobile")
    lighthouseMobile.src = `../assets/lighthouse/${projet.imgLighthouse[0]}`

    const lighthouseDesktop = document.querySelector(".lighthouse__desktop")
    lighthouseDesktop.src = `../assets/lighthouse/${projet.imgLighthouse[1]}`
} else {
    const lighthouse = document.querySelector(".lighthouse")
    lighthouse.remove()
}

/** Create skill cards */
const skillContent = document.querySelector("#skill__content")
for (const icon of projet.icon) {
    const cardClone = document.querySelector("#tmp-card-skill").content.firstElementChild.cloneNode(true)
    const skillImg = cardClone.querySelector(".skill__img")
    skillImg.src = `../assets/icon/${icon.img}`
    skillImg.alt = `Icon ${icon.name}`
    const skillTxt = cardClone.querySelector(".skill__txt")
    skillTxt.innerText = icon.name
    skillContent.append(cardClone)
}

/** Slide Effect */
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
