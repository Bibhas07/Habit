require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const db = require('./config/mongoose')


//set ejs as template engine
app.set('view engine' , 'ejs')

//middelware to parse incoming request body
app.use(bodyParser.urlencoded({extended:true}))

const habitController = require('./controllers/habitController')

//Routes
app.get('/', habitController.getAllHabits);
app.post('/add', habitController.addHabit);
app.get('/habit/:id', habitController.manageHabit);
app.post('/habit/:id', habitController.manageHabit);
app.get('/delete/:id', habitController.deleteHabit);



// Assuming your CSS file is in the "public" directory
app.use(express.static('./public'))

//start the server
app.listen(port , () => {
    console.log(`Server Running on ${port}`)
})