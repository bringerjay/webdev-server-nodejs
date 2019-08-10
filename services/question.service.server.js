var questionDao = require('..//daos/question.dao.server.js');

module.exports = function (app) {
    console.log('question service server')

    function createQuestion(req, res) {
        console.log('createQuestion')
        var question = req.body
        console.log(question)
        questionDao
            .createQuestion(question)
            .then(response => res.send(response))
    }

    function findAllQuestions(req, res) {
        console.log('findAllQuestions')
        questionDao
            .findAllQuestions()
            .then(questions => res.send(questions))
    }

    function findQuestionById(req, res) {
        var questionId = req.params['qid'];
        questionDao
            .findQuestionById(questionId)
            .then(question => res.json(question))
    }

    function findQuestionByText(req, res) {
        var text = req.params['question'];
        questionDao
            .findQuestionByText(text)
            .then(question => res.json(question))
    }

    function updateQuestion(req, res) {
        var questionId = req.params['qid'];
        var questionUpdates = req.body
        questionDao
            .updateQuestion(questionId, questionUpdates)
            .then(status => res.json(status))
    }

    function deleteQuestion(req, res) {
        var questionId = req.params['qid'];
        questionDao
            .deleteQuestion(questionId)
            .then(status => res.json(status))
    }

    app.post('/api/questions', createQuestion);
    app.get('/api/questions', findAllQuestions);
    app.get('/api/questions/:qid', findQuestionById);
    app.get('/api/questions/text/:text', findQuestionByText);
    app.put('/api/questions/:qid', updateQuestion);
    app.delete('/api/questions/:qid', deleteQuestion);
}
