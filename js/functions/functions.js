/**
 * Active le slider de navigation.
 */
export function sliderNav() {
    /**
     * Le bouton de bascule du slider.
     * @type {HTMLElement}
     */
    const btnToggle = document.querySelector(".btn-toggle");

    /**
     * Le slider de navigation.
     * @type {HTMLElement}
     */
    const navSlider = document.querySelector(".nav-slider");

    /**
     * Les liens du slider de navigation.
     * @type {NodeList}
     */
    const navSliderLink = document.querySelectorAll(".nav-slider__link");

    btnToggle.addEventListener("click", toggleNav);
    navSliderLink.forEach(a => a.addEventListener("click", () => toggleNav()));

    /**
     * Bascule l'état du slider de navigation.
     */
    function toggleNav() {
        btnToggle.classList.toggle("active");
        navSlider.classList.toggle("active");
    }
}

/**
 * Active le mode sombre/lumineux.
 */
export function themeMode() {
    /**
     * Le corps du document.
     * @type {HTMLElement}
     */
    const body = document.body;

    /**
     * L'icône représentant le soleil.
     * @type {HTMLElement}
     */
    const sun = document.querySelector('.sun');

    /**
     * L'icône représentant la lune.
     * @type {HTMLElement}
     */
    const moon = document.querySelector('.moon');

    /**
     * Active le mode sombre.
     */
    function darkMode() {
        localStorage.setItem('darkMode', 'dark');
        moon.style.display = 'none';
        sun.style.display = 'block';
        body.classList.add('dark');
    }

    /**
     * Active le mode lumineux.
     */
    function lightMode() {
        localStorage.setItem('darkMode', 'light');
        sun.style.display = 'none';
        moon.style.display = 'block';
        body.classList.remove('dark');
    }

    const themeStorage = localStorage.getItem('darkMode');

    if (themeStorage === 'dark') {
        darkMode();
    } else {
        lightMode();
    }

    /**
     * Écouteur d'événement pour basculer entre les modes sombre et lumineux.
     */
    const theme = document.querySelector('.theme');
    theme.addEventListener('click', () => {
        const themeStorage = localStorage.getItem('darkMode');
        if (themeStorage === 'dark') {
            lightMode();
        } else {
            darkMode();
        }
    });
}

/**
 * Ajoute l'effet à l'en-tête.
 */
export function headerEffect() {
    /**
     * L'en-tête du document.
     * @type {HTMLElement}
     */
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
}
