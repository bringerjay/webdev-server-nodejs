const mongoose = require('mongoose')
module.exports = mongoose.Schema({
    choices: Array,
    correct: Number
},{ _id : false })
