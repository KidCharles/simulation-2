const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , ctrl = require('./ctrl')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

app.get('/api/houses', ctrl.getHouses)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.post('/api/houses', ctrl.addHouse)


const port = 3030
app.listen(port, () => console.log(`server is listening on port ${port}`))