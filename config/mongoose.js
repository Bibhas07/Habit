const mongoose = require('mongoose')

mongoose.connect(`${process.env.DB_MONGO}`)

const db = mongoose.connection

db.on('error' , console.error.bind(console,'Error Connecting to Mongo'))

db.once('open' , function(){
    console.log('Connected To Db : Mongo')
})

module.exports = db;