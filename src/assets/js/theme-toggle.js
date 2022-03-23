const toggleSwitch = document.querySelector('#theme-toggle')
const currentTheme = window.localStorage.getItem('theme')
const heroContainer = document.querySelector('.mds-hero-container')

function setDarkTheme () {
  toggleSwitch.classList.remove('light-theme-set')
  toggleSwitch.classList.add('dark-theme-set')
  if (heroContainer) {
    heroContainer.classList.add('mds-hero-container--dark')
  }
}

if (currentTheme) {
  document.documentElement.setAttribute('data-color-theme', currentTheme)
  if (currentTheme === 'dark') {
    setDarkTheme()
  }
} else {
  if (window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
    setDarkTheme()
  }
}

toggleSwitch.addEventListener('click', e => {
  if (e.target.closest('.mcc-navigation-header__button:not(.dark-theme-set)')) {
    document.documentElement.setAttribute('data-color-theme', 'dark')
    window.localStorage.setItem('theme', 'dark')
    toggleSwitch.classList.add('dark-theme-set')

    if (heroContainer) {
      heroContainer.classList.add('mds-hero-container--dark')
    }
  } else {
    document.documentElement.setAttribute('data-color-theme', 'light')
    window.localStorage.setItem('theme', 'light')
    toggleSwitch.classList.remove('dark-theme-set')

    if (heroContainer) {
      heroContainer.classList.remove('mds-hero-container--dark')
    }
  }
})
