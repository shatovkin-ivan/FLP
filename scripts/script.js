window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        hamburger = document.querySelector('.hamburger'),
        lang = document.querySelector('.change-language_menu');

        hamburger.addEventListener('click', (e) => {
            e.preventDefault()
            menu.classList.toggle('menu_active')
            hamburger.classList.toggle('hamburger_active')
            lang.classList.toggle('change-language_active')
        })
})