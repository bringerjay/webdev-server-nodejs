module.exports = function () {
    var mongoose = require('mongoose')
    const databaseName = 'whiteboard'
    var connectionString = 'mongodb://localhost:27017/'
    connectionString += databaseName
    mongoose.connect(connectionString,{useNewUrlParser: true})
}
