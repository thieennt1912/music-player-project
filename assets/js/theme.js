
// ============= Dark Light Theme
const themeButton = document.getElementById('theme-btn')
const themeButton1 = document.getElementById('theme-btn-1')
const themeButton2 = document.getElementById('theme-btn-2')
const darkTheme = 'dark-theme'
const iconTheme = 'bi-sun'
const iconTheme1 = 'bi-toggle2-on'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bi-moon' : 'bi-sun'
const getCurrentIcon1 = () => themeButton1.classList.contains(iconTheme1) ? 'bi-toggle2-off' : 'bi-toggle2-on'
const getCurrentIcon2 = () => themeButton2.classList.contains(iconTheme1) ? 'bi-toggle2-off' : 'bi-toggle2-on'

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'bi-moon' ? 'add' : 'remove'](iconTheme)
    themeButton1.classList[selectedTheme === 'bi-toggle2-off' ? 'add' : 'remove'](iconTheme1)
    themeButton2.classList[selectedTheme === 'bi-toggle2-off' ? 'add' : 'remove'](iconTheme1)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

themeButton1.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton1.classList.toggle(iconTheme1)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon1())
})

themeButton2.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton2.classList.toggle(iconTheme1)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon2())
})


