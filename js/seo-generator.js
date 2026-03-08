const fs = require("fs")

const data = JSON.parse(
fs.readFileSync("data/seo-pages.json")
)

const template = fs.readFileSync(
"templates/seo-template.html",
"utf8"
)

data.pages.forEach(page => {

let html = template
.replace(/{{title}}/g,page.title)
.replace(/{{description}}/g,page.description)

fs.writeFileSync(
`en/guides/${page.slug}.html`,
html
)

})