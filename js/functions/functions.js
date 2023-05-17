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
    const body = document.body
    const sun = document.querySelector('.sun')
    const moon = document.querySelector('.moon')

    const themeStorage = localStorage.getItem('darkMode')
    if (themeStorage === 'dark') {
        darkMode()
    } else {
        lightMode()
    }

    const theme = document.querySelector('.theme')
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
        moon.style.display = 'none'
        sun.style.display = 'block'
        body.classList.add('dark')
    }

    function lightMode() {
        localStorage.setItem('darkMode', 'light')
        sun.style.display = 'none'
        moon.style.display = 'block'
        body.classList.remove('dark')
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