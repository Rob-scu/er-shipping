const express = require('express')
const app = express()

const db = {
    shipments: {

    }


}

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/shipments', function (req, res) {
    res.send(db.shipments)
})

app.post('/shipments', function (req, res) {

})

app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port {process.env.PORT}!`)
})