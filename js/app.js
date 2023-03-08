// Effect nav-slider
const btnToggle = document.querySelector(".btn-toggle")
const navSlider = document.querySelector(".nav-slider")
const navSliderLink = document.querySelectorAll(".nav-slider__link")

const sections = document.querySelectorAll('.section')
const links = document.querySelectorAll('.nav__link')

btnToggle.addEventListener("click", toggleNav)
navSliderLink.forEach(a => a.addEventListener("click", () => toggleNav()))

function toggleNav() {
    btnToggle.classList.toggle("active")
    navSlider.classList.toggle("active")
}

// Effect multiText
const typingEffect = new Typed(".intro__multiText", {
    strings: ["Developer", "Jimmy Clairy"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})


// Effect slide
const slideCards = document.querySelector('.cards');

window.addEventListener('scroll', () => {

    const { scrollTop, clientHeight } = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slideCards.getBoundingClientRect().top;

    // console.log(topElementToTopViewport);

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.9) {
        slideCards.classList.add('active')
    }
})


// Effect nav
const options = {
    threshold: "0.6", // 0.6 === 60% of the section should be visible
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            console.log(e.target.id)
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