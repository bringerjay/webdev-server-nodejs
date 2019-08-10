var mongoose = require('mongoose');
var quizwidget = require('./quizwidget.schema.server.js')

var quizWidgetModel =
    mongoose.model(
        'QuizWidgetModel',
        quizwidget);

module.exports = quizWidgetModel
