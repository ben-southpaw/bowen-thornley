const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ben.dryden/Desktop/template-repos/bowen-thornley/.cache/dev-404-page.js"))),
  "component---node-modules-narative-gatsby-theme-novela-src-templates-article-template-tsx": hot(preferDefault(require("/Users/ben.dryden/Desktop/template-repos/bowen-thornley/node_modules/@narative/gatsby-theme-novela/src/templates/article.template.tsx"))),
  "component---node-modules-narative-gatsby-theme-novela-src-templates-articles-template-tsx": hot(preferDefault(require("/Users/ben.dryden/Desktop/template-repos/bowen-thornley/node_modules/@narative/gatsby-theme-novela/src/templates/articles.template.tsx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ben.dryden/Desktop/template-repos/bowen-thornley/src/pages/404.js")))
}

