const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '../public')))

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

app.listen(3000, () => {
    console.log(`server running in port 3000`)
})
