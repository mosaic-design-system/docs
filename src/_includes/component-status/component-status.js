const statusLabel = function (statusValue) {
  if (statusValue.dataset.value === 'Yes' || statusValue.dataset.value === 'Available') {
    statusValue.innerHTML = `
      <div class="mu-d-flex mu-align-items-center">
        <mcc-icon class="mu-mr-03" name="ok" icon-set="fluency-color"></mcc-icon> ${statusValue.dataset.value}
      </div>
    `
  } else if (statusValue.dataset.value === 'No') {
    statusValue.innerHTML = `
      <div class="mu-d-flex mu-align-items-center">
        <mcc-icon class="mu-mr-03" name="cancel" icon-set="fluency-color"></mcc-icon> ${statusValue.dataset.value}
      </div>
    `
  } else if (statusValue.dataset.value === 'In queue') {
    statusValue.innerHTML = `
      <div class="mu-d-flex mu-align-items-center">
        <mcc-icon class="mu-mr-03" name="stack_of_paper" icon-set="fluency-color"></mcc-icon> ${statusValue.dataset.value}
      </div>
    `
  } else if (statusValue.dataset.value === 'In development') {
    statusValue.innerHTML = `
      <div class="mu-d-flex mu-align-items-center">
        <mcc-icon class="mu-mr-03" name="in_progress" icon-set="fluency-color"></mcc-icon> ${statusValue.dataset.value}
      </div>
    `
  } else if (statusValue.dataset.value === 'Not applicable') {
    statusValue.innerHTML = `
      <div class="mu-d-flex mu-align-items-center">
        <mcc-icon class="mu-mr-03" name="not_applicable" icon-set="fluency-color"></mcc-icon> ${statusValue.dataset.value}
      </div>
    `
  }
}

const statusDesign = document.querySelectorAll('td[data-title="Design"]')
statusDesign.forEach(label => statusLabel(label))

const statusDocs = document.querySelectorAll('td[data-title="Documentation"]')
statusDocs.forEach(label => statusLabel(label))

const statusHTMLCSS = document.querySelectorAll('td[data-title="HTML/CSS"]')
statusHTMLCSS.forEach(label => statusLabel(label))

const statusWebComponent = document.querySelectorAll('td[data-title="Web Component"]')
statusWebComponent.forEach(label => statusLabel(label))
