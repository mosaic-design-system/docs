const scrollToTopBtn = document.querySelector('.mds-back-to-top')
const rootElement = document.documentElement

window.addEventListener('scroll', () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if (rootElement.scrollTop / scrollTotal > 0.25) {
    scrollToTopBtn.classList.add('mds-back-to-top--show')
  } else {
    scrollToTopBtn.classList.remove('mds-back-to-top--show')
  }
})

scrollToTopBtn.addEventListener('click', () => {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
