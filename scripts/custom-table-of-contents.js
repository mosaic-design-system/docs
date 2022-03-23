const HTMLParser = require('node-html-parser')

module.exports = content => {
  const contents = []

  const html = HTMLParser.parse(content)
  html.querySelectorAll('h2').forEach(x => {
    const id = x.id
    const text = x.innerText
    contents.push({ id, text })
  })

  const contentsContainer = HTMLParser.parse(`
    <div class="mu-mb-07">
      <script>
        function scrollToElem(id) {
          document.getElementById(id).scrollIntoView()
        }
      </script>
      ${contents.map(x => `
        <button class="mcc-button mcc-button--anchor mu-d-block" onclick="scrollToElem('${x.id}')">
          <span class="mcc-button__label">${x.text}</span>
        </button>
      `).join('')}
    </div>
  `)

  return contentsContainer.outerHTML
}