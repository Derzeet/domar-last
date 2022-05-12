const mongoose = require('mongoose')
let schema = new mongoose.Schema( {
    name: {
        type:String,
        required: true
    },
    additional: {
        type:String,
        required:false
    },
    date: {
        type:Date,
        required:true
    },
    done: {
        type:Boolean,
        required:true,
        default:false
    },
    user: {
        type: String,
        required: true
    }
})
let event = new mongoose.model('events', schema)
module.exports = event