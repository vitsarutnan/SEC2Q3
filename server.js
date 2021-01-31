const fetch = require('node-fetch')

fetchData = () => {
    const argv = process.argv[process.argv.length - 1] || 'B-INCOMESSF' 
    const headers = { cookie: 'hasCookie=true' }
    fetch('https://codequiz.azurewebsites.net', { headers })
        .then((res) => res.text())
        .then((html) => {
            tagHTML = '</td><td>'
            firstArgv = html.indexOf(argv)
            firstValue = html.indexOf(tagHTML, firstArgv) + tagHTML.length
            firstendTagHtml = html.indexOf(tagHTML, firstValue)
            console.log(html.slice(firstValue, firstendTagHtml))
        })
}

fetchData()