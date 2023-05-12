// Effect nav-slider ---------------------------------------------------------------------------------------------
export function sliderNav() {
    const btnToggle = document.querySelector(".btn-toggle")
    const navSlider = document.querySelector(".nav-slider")
    const navSliderLink = document.querySelectorAll(".nav-slider__link")

    btnToggle.addEventListener("click", toggleNav)
    navSliderLink.forEach(a => a.addEventListener("click", () => toggleNav()))

    function toggleNav() {
        btnToggle.classList.toggle("active")
        navSlider.classList.toggle("active")
    }
}

// ThemeMode -------------------------------------------------------------------------------------------------------
export function themeMode() {
    const theme = document.querySelector('.theme')
    const body = document.querySelector('body')
    const header = document.querySelector('.header')
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
}

// Effect header ---------------------------------------------------------------------------------------------
export function headerEffect() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        // console.log(window.scrollY);
        if (window.scrollY > 20) {
            header.classList.add("active")
        } else {
            header.classList.remove("active")
        }
    })
}