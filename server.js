const express = require('express')
const app = express()
// Importing handlebars and configuring the view engine
const {engine} = require('express-handlebars')

app.engine('handlebars', engine({
    defaultlayout: 'main'
}))
app.set('view engine', 'handlebars')

// Creating each endpoint
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/aboutme', (req, res) => {
    res.render('aboutme')
})

app.get('/contactme', (req, res) => {
    res.render('contactme')
})

app.get('/home', (req, res) => {
    res.render('helloworld')
})


app.listen(8080)