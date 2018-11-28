const Bundler = require('parcel-bundler')
const app = require('express')()

app.get('/test', (req, res) => {
    res.send('This is a test')
})

const file = __dirname + '/client/index.html'

const bundler = new Bundler(file, {})

app.use(bundler.middleware())

app.listen(8080)
