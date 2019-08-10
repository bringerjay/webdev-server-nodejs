var quizWidgetDao = require('..//daos/quizWidget.dao.server.js');

module.exports = function (app) {
    console.log('quizWidget service server')

    function createQuizWidget(req, res) {
        console.log('createQuizWidget')
        var quizWidget = req.body
        console.log(quizWidget)
        quizWidgetDao
            .createQuizWidget(quizWidget)
            .then(response => res.send(response))
    }

    function findAllQuizWidgets(req, res) {
        console.log('findAllQuizWidgets')
        quizWidgetDao
            .findAllQuizWidgets()
            .then(quizWidgets => res.send(quizWidgets))
    }

    function findQuizWidgetById(req, res) {
        var quizWidgetId = req.params['wid'];
        quizWidgetDao
            .findQuizWidgetById(quizWidgetId)
            .then(quizWidget => res.json(quizWidget))
    }

    function updateQuizWidget(req, res) {
        var quizWidgetId = req.params['wid'];
        var quizWidgetUpdates = req.body
        quizWidgetDao
            .updateQuizWidget(quizWidgetId, quizWidgetUpdates)
            .then(status => res.json(status))
    }

    function deleteQuizWidget(req, res) {
        var quizWidgetId = req.params['wid'];
        quizWidgetDao
            .deleteQuizWidget(quizWidgetId)
            .then(status => res.json(status))
    }

    app.post('/api/quizWidgets', createQuizWidget);
    app.get('/api/quizWidgets', findAllQuizWidgets);
    app.get('/api/quizWidgets/:wid', findQuizWidgetById);
    app.put('/api/quizWidgets/:wid', updateQuizWidget);
    app.delete('/api/quizWidgets/:wid', deleteQuizWidget);
}
