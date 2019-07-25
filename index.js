const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const connection = require('./sql.js')

const api = require('./Routes/index.js')

connection
    .authenticate()
    .then(() => {
        console.log('Connection has been established succesfully')
        
        app.use(cors())
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

        app.use('/', api)

        app.listen(3000)

    })
    .catch(err => console.error('Unable to connect to the database: ', err))

connection.sync().then(e => console.log('sync!'))