const mongoose = require('mongoose')
const Schema = mongoose.Schema;
module.exports = mongoose.Schema({
    _id: Number,
    questions: {type: Schema.Types.ObjectId, ref: 'QuestionModel'},
}, {collection: 'questions'})
