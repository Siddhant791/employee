require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const url = process.env.DATABASE_URL

//Get express framework
const app = express()

// Establish connection with mongoDB
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

//Once connection is done with mongoDB
con.on('open',() => {
 console.log('connected...')
})

//Data-type will be json
app.use(express.json())

//Creating route to handle all employee api's
const employeesRouter = require('./routers/employeesController')
app.use('/api/employees',employeesRouter)

//Starting our express web server on port 9000
app.listen(9000,() => {
 console.log('Server started ...')
} )