const mongoose = require('mongoose')

mongoose.connect(`${process.env.DB}`).then(() => {
    console.log('Connection Successful')
}).catch((err) => console.log(err))

const db = mongoose.connection

db.on('error' , console.error.bind(console,'Error Connecting to Mongo'))

db.once('open' , function(){
    console.log('Connected To Db : Mongo')
})

module.exports = db;