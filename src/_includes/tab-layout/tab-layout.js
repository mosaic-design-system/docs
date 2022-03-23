document.addEventListener('DOMContentLoaded', _ => {
  // fix tab selection
  const inputs = document.getElementById('main-tab-layout').querySelectorAll('mcc-tabs > input[type=radio]')
  const labels = document.getElementById('main-tab-layout').querySelectorAll('mcc-tabs > ul[role=tablist] li label')
  const panes = document.getElementById('main-tab-layout').querySelectorAll('mcc-tabs > mcc-tab-pane')
  inputs.forEach((input, index) => input.setAttribute('id', panes[index].getAttribute('aria-labelledby')))
  inputs.forEach((input, index) => input.setAttribute('aria-controls', panes[index].id))
  labels.forEach((label, index) => label.setAttribute('for', panes[index].getAttribute('aria-labelledby')))
  panes.forEach(pane => pane.setAttribute('slug', slugify(pane.getAttribute('label'))))

  // if the url has a hash, try to select that tab
  if (window.location.hash) {
    const selected = Array.from(panes).find(pane => pane.getAttribute('slug') === window.location.hash.replace('#', ''))
    if (selected) {
      const label = Array.from(labels).find(label => label.getAttribute('for') === selected.getAttribute('aria-labelledby'))
      if (label) label.click()
    }
  }

  // when we click a tab, set the url hash
  labels.forEach(label => label.addEventListener('click', evt => {
    const pane = Array.from(panes).find(pane => pane.getAttribute('aria-labelledby') === label.getAttribute('for'))
    const slug = pane && pane.getAttribute('slug')
    if (slug) window.location.hash = slug
  }))
})

const slugify = str => str.toString().normalize('NFKD').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')