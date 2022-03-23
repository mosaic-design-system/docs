const fs = require('fs')
const path = require('path')
const glob = require('glob-all')
const matter = require('gray-matter')
const lunr = require('lunr')

const slugify = str => str.toString().normalize('NFKD').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')
const capitalizeString = str => str.charAt(0).toUpperCase() + str.slice(1)

const documents = []
const docs = {}

glob.sync(['./src/**/*.md'])
  .forEach(file => {
    const { dir, name } = path.parse(file)
    const raw = fs.readFileSync(file, { encoding: 'utf8' })
    const col = dir.replace('./src/', '')
    const baseUrl = col === './src' ? '/' : `/${col}/${name}`
    const { content, data } = matter(raw)

    if (data.tabs && data.tabs.length) {
      // process tabs
      data.tabs.forEach(tab => {
        const url = `${baseUrl}#${slugify(tab.title)}`
        const collection = col === './src' ? null : capitalizeString(col)
        const title = data.title
        const tabTitle = tab.title

        // parse tab hook if available
        const text = tab.hook && tab.hook.length
          ? data[tab.hook].body
          : tab.body

        documents.push({ url, collection, title, tab: tabTitle, text })
      })
    } else {
      const url = baseUrl
      const collection = col === './src' ? null : capitalizeString(col)
      const title = data.title
      const text = content

      documents.push({ url, collection, title, tab: null, text })
    }
  })

const idx = lunr(function () {
  this.ref('url')
  this.field('title', { boost: 10 })
  this.field('tab', { boost: 5 })
  this.field('url')
  this.field('text')

  documents.forEach(function (doc) {
    this.add(doc)
    const { url, collection, title, tab } = doc
    docs[url] = { collection, title, tab }
  }, this)
})

fs.writeFileSync('./src/assets/js/search-index.json', JSON.stringify(idx))
fs.writeFileSync('./src/assets/js/search-docs.json', JSON.stringify(docs))