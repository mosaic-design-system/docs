const showVariant = variantName => {
  const id = variantName.toLowerCase().replace(/\s+/g, '_')
  const variants = document.getElementsByClassName('js-variant-container')

  // make sure all variants are hidden
  Array.from(variants).forEach(p => {
    p.classList.remove('mu-d-grid')
    p.classList.add('mu-d-none')
  })

  // show selected variant
  const selectedVariant = document.getElementById(id)
  selectedVariant.classList.remove('mu-d-none')
  selectedVariant.classList.add('mu-d-grid')

  // update variant title
  const nameElem = document.getElementById('variant-name')
  nameElem.innerText = variantName

  // close variant selector dropdown
  const variantSelector = document.getElementById('variant-selector')
  variantSelector.open = false
}

const modifyVariant = (template) => {
  // get classes
  const form = document.querySelector('div.js-variant-container:not(.mu-d-none) div.variant-modifiers form')
  const classes = Array.from(form.querySelectorAll('input[type=radio]:checked')).map(input => {
    const { selector, multiple, value } = input.dataset
    return { selector, multiple, value }
  })

  // get toggle classes
  const toggleClasses = Array.from(form.querySelectorAll('input[type=checkbox][data-type=class]:checked')).map(input => {
    const { selector, multiple, value } = input.dataset
    return { selector, multiple, value }
  })

  // get attributes
  const attributes = Array.from(form.querySelectorAll('input[type=checkbox][data-type=attribute]:checked')).map(input => {
    const { selector, multiple, attributeDetails } = input.dataset
    const { name, value } = JSON.parse(attributeDetails)
    return { selector, multiple, name, value }
  })

  // get handle container to and reset template
  const container = document.querySelector('div.js-variant-container:not(.mu-d-none) div.js-variant-template')
  container.innerHTML = template

  // apply classes
  classes.forEach(c => {
    if (c.multiple) {
      const elems = container.querySelectorAll(c.selector)
      Array.from(elems).forEach(elem => elem.classList.add(c.value))
    } else {
      const elem = container.querySelector(c.selector)
      elem.classList.add(c.value)
    }
  })

  // apply toggle classes
  toggleClasses.forEach(c => {
    if (c.multiple) {
      const elems = container.querySelectorAll(c.selector)
      Array.from(elems).forEach(elem => elem.classList.add(c.value))
    } else {
      const elem = container.querySelector(c.selector)
      elem.classList.add(c.value)
    }
  })

  // apply attributes
  attributes.forEach(attr => {
    if (attr.multiple) {
      const elems = container.querySelectorAll(attr.selector)
      Array.from(elems).forEach(elem => elem.setAttribute(attr.name, attr.value || ""))
    } else {
      const elem = container.querySelector(attr.selector)
      elem.setAttribute(attr.name, attr.value || "")
    }
  })
}

document.addEventListener('DOMContentLoaded', _ => {
  // trigger first variant into view
  const selectorElem = document.getElementById('variant-selector')
  const firstItem = selectorElem.querySelector('ul.mcc-dropdown__menu li:first-of-type button')
  firstItem.click()

  // set initial state for each variant
  const variants = document.querySelectorAll('div.js-variant-container')
  Array.from(variants).forEach(variant => {
    // set initial form values
    const form = variant.querySelector('div.variant-modifiers form')
    if (!form) return

    const inputs = form.querySelectorAll('legend ~ div.mfc-radio-wrapper > input[type=radio][data-default=true]') || form.querySelector('legend ~ div.mfc-radio-wrapper > input[type=radio]:first-of-type')

    const classesToApply = Array.from(inputs).map(input => {
      input.checked = true
      const { selector, multiple, value } = input.dataset
      return { selector, multiple, value }
    })

    // modify the variant state
    const container = variant.querySelector('div.js-variant-template')
    classesToApply.filter(Boolean).forEach(c => {
      if (c.multiple) {
        const elems = container.querySelectorAll(c.selector)
        Array.from(elems).forEach(elem => elem.classList.add(c.value))
      } else {
        const elem = container.querySelector(c.selector)
        elem.classList.add(c.value)
      }
    })
  })
})
