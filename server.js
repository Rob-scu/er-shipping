const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const db = {
    creditcards: []
}


app.get('/', function (req, res) {
    res.send('Hello World!')
})


app.get('/new', function (req, res) {
    //interesting
    res.send({
        something: 'else',
        someArray: [
            {"one": 1},
            {"two": 2}

        ]
    })
})

app.get('/creditcards', function (req, res) {
    res.send(db.creditcards);
})

app.put('/save', bodyParser.json(), function (req, res) {


    res.send('got it.')
})


app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})