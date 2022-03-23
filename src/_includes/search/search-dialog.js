const _focusInput = () => {
  const searchInput = document.querySelector('input[type=text]#search')
  searchInput.focus()
}

const showSearchDialog = () => {
  const dialog = document.getElementById('search-dialog')
  dialog.show()
  dialog.addEventListener('transitionend', _focusInput)
}

const closeSearchDialog = () => {
  const dialog = document.getElementById('search-dialog')
  dialog.removeEventListener('transitionend', _focusInput)
  dialog.close()
}

window.addEventListener('keydown', evt => {
  // if ctrl-k is pressed show the search dialog and prevent default behaviour
  // which is to search in the address bar
  if (evt.ctrlKey && evt.key === 'k') {
    showSearchDialog()
    evt.preventDefault()
    evt.stopPropagation()
  }

  // if the escape key is pressed close the search dialog
  if (evt.key === 'Escape') {
    closeSearchDialog()
  }
})