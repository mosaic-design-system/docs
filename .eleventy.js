const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const htmlmin = require("html-minifier")
const markdownIt = require('markdown-it')({ html: true, linkify: true })
let markdownItAnchor = require("markdown-it-anchor")
const { minify } = require('uglify-js')
const slugify = require('./scripts/slugify-string')
const buildCustomTableOfContents = require('./scripts/custom-table-of-contents')
const CleanCSS = require("clean-css");

module.exports = (eleventyConfig) => {
  // disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false)

  // merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true)

  // asset shortcodes
  eleventyConfig.addShortcode("asset", function (path) {
    return `/assets/${path}`
  })
  eleventyConfig.addShortcode("img", function (path) {
    return `/assets/img/${path}`
  })
  eleventyConfig.addShortcode("js", function (path) {
    return `/assets/js/${path}`
  })

  function markdownItLib () {
    return markdownIt
      .use(markdownItAnchor, { slugify })
  }

  eleventyConfig.setLibrary('md', markdownItLib())
  eleventyConfig.addFilter('custom_toc', buildCustomTableOfContents)

  // add filters
  eleventyConfig.addFilter("stringify_filter", (content) => JSON.stringify(content))
  eleventyConfig.addFilter("snake_case_filter", (name) => name.toLowerCase().replace(/\s+/g, '_'))
  eleventyConfig.addFilter("null_filter", (value) => value ? value : "")
  eleventyConfig.addFilter('markdownify', (markdownString) => markdownIt.render(markdownString))

  eleventyConfig.addFilter('jsmin', (js) => {
    const result = minify(js)

    if (result.error) {
      console.log('UglifyJS Error: ', result.error)
      return js
    }

    return result.code
  })

  // sort collections for navigation
  const orderSort = (a, b) => a.data.order - b.data.order
  const titleSort = (a, b) =>
    a.data.title.toLowerCase() === 'overview'
      ? -1
      : b.data.title.toLowerCase() === 'overview'
        ? 1
        : a.data.title.localeCompare(b.data.title)

  // IMPORTANT: the order of the collections in this array must match the display order
  // on the site otherwise the forward/backward navigation will not work properly
  const collections = [
    { name: 'sortedMosaic', collection: 'mosaic', sortFunc: orderSort },
    { name: 'sortedDesigning', collection: 'designing', sortFunc: orderSort },
    { name: 'sortedDeveloping', collection: 'developing', sortFunc: orderSort },
    { name: 'sortedGuidelines', collection: 'guidelines', sortFunc: orderSort },
    { name: 'sortedComponents', collection: 'components', sortFunc: titleSort },
    { name: 'sortedForms', collection: 'forms', sortFunc: titleSort },
    { name: 'sortedPatterns', collection: 'patterns', sortFunc: titleSort },
    { name: 'sortedinAppGuidance', collection: 'in_app_guidance', sortFunc: orderSort },
    { name: 'sortedHelp', collection: 'help', sortFunc: orderSort }
  ]

  const globalCollection = []
  const sortCollection = ({ name, collection, sortFunc }) => {
    eleventyConfig.addCollection(name, collectionApi => {
      const sortedCollection = collectionApi.getFilteredByTag(collection)
        .filter(item => item.data.title.toLowerCase() !== 'headings and layout')
        .sort((a, b) => sortFunc(a, b))

      globalCollection.push(sortedCollection)
      return sortedCollection
    })
  }

  collections.forEach(sortCollection)

  // add global collection for footer nav
  eleventyConfig.addCollection('globalCollection', _ => globalCollection.flat())

  // sort team collection
  eleventyConfig.addCollection("team", function(collection) {
    return collection.getFilteredByGlob("src/team/*.md").sort(function(a, b) {
        let nameA = a.data.name.toUpperCase();
        let nameB = b.data.name.toUpperCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
    });
});


  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight)

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
  })

  // Copy js Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/assets/js")

  // Copy images to route of /_site
  eleventyConfig.addPassthroughCopy("./src/assets/img")

  // Copy fonts to route of /_site
  eleventyConfig.addPassthroughCopy("./src/assets/fonts")

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }

    return content
  })

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.setTemplateFormats("md,njk")

  return {
    dir: {
      input: "src",
    }
  }
}
