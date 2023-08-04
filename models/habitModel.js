const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description : String ,
    createdAt:{
        type: Date,
        default: Date.now,
    },
    status:{
        type: String,
        enum:['Done' , 'Not done' , 'None'],
        default:'None',
    },
    history: [
        {
            date : Date,
            status:{
                type: String,
                enum:['Done' , 'Not done' , 'None'],
                default:'None',
            }
        }
    ]
})

const Habit = mongoose.model('Habit' , habitSchema)

module.exports = Habit;