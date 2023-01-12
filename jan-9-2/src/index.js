const express = require('express')
const path = require('path')
const app = express()
const validator = require('validator')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')


app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello WD19P learners')
})

app.get('/test', (req, res) => {
    res.send('this is a /test endpoint')
})

app.get('/customer', (req, res) => {
    res.send({ name: 'Ellen', age: 24 })
})

app.get('/about', (req, res) => {
    res.send(`About page and sum is ${5 + 4}`)
})
app.get('/weather', (req, res) => {
    res.send(`<h1>the weather for today ${Date()} is rainy</h1>`)
})

app.get('/template', (req, res) => {
    console.log(req.query.t)
    let sum = 10 + 14
    if (validator.isNumeric(req.query.t)) {
        sum = 10 + parseInt(req.query.t)
    }

    res.render('template', {
        sum: sum,
        title: 'Dynamic Content Rendering',
        heading: "templating with handle bars"
    })
})

app.get('/customers', (req, res) => {
    let customers = [
        { name: 'a', age: 1 },
        { name: 'b', age: 2 },
        { name: 'c', age: 3 },
        { name: 'd', age: 4 },
        { name: 'e', age: 5 },
    ]

    res.send(customers)
})

app.get('/new', (req, res) => {
    res.send('test')
})

app.post('/register', (req, res) => {
    console.log(req.body)
    // res.send('registration successful')
    res.render('registration-result', { fullname: req.body.fullname, email: req.body.email })
})

app.listen(3000, () => {
    console.log(`server running in port 3000`)
})
