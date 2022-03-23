const storeScrollPosition = () => {
  // save current menu scroll position in session storage
  const sidebar = document.querySelector('aside > .mcc-menu')
  window.sessionStorage.setItem('MDS_ScrollTop', sidebar.scrollTop)
}

const setScrollPosition = () => {
  // read menu scroll position from storage and apply
  const scrollTop = window.sessionStorage.getItem('MDS_ScrollTop')
  const sidebar = document.querySelector('aside > .mcc-menu')
  sidebar.scrollTop = scrollTop
}

const highlightCurrentPage = () => {
  // highlight current page in nav sidebar
  const currentPath = window.location.pathname
  const navButton = document.querySelector(`aside > .mcc-menu a[href="${currentPath}"]`)
  navButton.classList.add('mu-is-active')
  navButton.closest('details').open = true
  navButton.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

document.addEventListener('DOMContentLoaded', _ => {
  document.querySelectorAll('aside > .mcc-menu a')
    .forEach(a => {
      a.addEventListener('click', _ => {
        storeScrollPosition()
      })
    })

  setScrollPosition()
  highlightCurrentPage()
})
