const homePage = document.querySelector('body.is-home')
const drawerToggleButton = document.getElementById('drawer-toggle')

// Change drawer type to dismissible on desktop
const navDrawer = document.getElementById('site-nav-drawer')
const desktop = window.matchMedia('(min-width: 992px)')
if (desktop.matches) {
  navDrawer.setAttribute('type', 'dismissible')
  if (!homePage) {
    navDrawer.classList.add('mcc-drawer--open')
    navDrawer.classList.remove('mcc-drawer--closed')
    drawerToggleButton.classList.remove('drawer-is-closed')
  }

  if (navDrawer.classList.contains('mcc-drawer--closed')) {
    drawerToggleButton.classList.add('drawer-is-closed')
  }
}

// Change drawer type to modal on desktop
const mobile = window.matchMedia('(max-width: 992px)')
if (mobile.matches) {
  navDrawer.setAttribute('type', 'modal')
  navDrawer.classList.remove('mcc-drawer--open')
  navDrawer.classList.add('mcc-drawer--closed')
  drawerToggleButton.classList.add('drawer-is-closed')

  if (navDrawer.classList.contains('mcc-drawer--closed')) {
    drawerToggleButton.classList.add('drawer-is-closed')
  }
}

// Toggle drawer type based on window size
window.addEventListener('resize', function() {
  const navDrawer = document.getElementById('site-nav-drawer')
  if (window.innerWidth > 992) {
    navDrawer.setAttribute('type', 'dismissible')
    if (!homePage) {
      navDrawer.classList.add('mcc-drawer--open')
      navDrawer.classList.remove('mcc-drawer--closed')
      drawerToggleButton.classList.remove('drawer-is-closed')
    }

    if (navDrawer.classList.contains('mcc-drawer--closed')) {
      drawerToggleButton.classList.add('drawer-is-closed')
    }
  } else if (window.innerWidth < 992) {
    navDrawer.setAttribute('type', 'modal')
    navDrawer.classList.remove('mcc-drawer--open')
    navDrawer.classList.add('mcc-drawer--closed')
    drawerToggleButton.classList.add('drawer-is-closed')

    if (navDrawer.classList.contains('mcc-drawer--closed')) {
      drawerToggleButton.classList.add('drawer-is-closed')
    }
  }
})

drawerToggleButton.addEventListener('click', e => {
  const navDrawer = document.getElementById('site-nav-drawer')
  if (navDrawer.classList.contains('mcc-drawer--open')) {
    navDrawer.close()
    drawerToggleButton.classList.add('drawer-is-closed')
  } else {
    navDrawer.open()
    drawerToggleButton.classList.remove('drawer-is-closed')
  }
})
