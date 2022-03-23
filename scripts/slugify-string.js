const slugify = require("slugify")

module.exports = str => slugify(str, { lower: true, remove: /[:’'`,]/g })