var quizWidgetModel = require('../data/models/quizwidget.model.server');

function createQuizWidget(widget) {
    return quizWidgetModel.create(widget)
}

function findAllQuizWidgets() {
    return quizWidgetModel.find()
}

function findQuizWidgetById(widgetId) {
    return quizWidgetModel.findById(widgetId)
}

function updateQuizWidget(widgetId, widgetUpdates) {
    return quizWidgetModel.update(
        {_id: widgetId},
        {$set: widgetUpdates}
    )
}

function deleteQuizWidget(widgetId) {
    return quizWidgetModel.remove({_id: widgetId})
}

module.exports = {
    createQuizWidget, findAllQuizWidgets,
    findQuizWidgetById, updateQuizWidget, deleteQuizWidget
};
