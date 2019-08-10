var answerDao = require('..//daos/answer.dao.server.js');

module.exports = function (app) {
    console.log('answer service server')

    function createAnswer(req, res) {
        console.log('createAnswer')
        var answer = req.body
        console.log(answer)
        answerDao
            .createAnswer(answer)
            .then(response => res.send(response))
    }

    function findAllAnswers(req, res) {
        console.log('findAllAnswers')
        answerDao
            .findAllAnswers()
            .then(answers => res.send(answers))
    }

    function findAnswerById(req, res) {
        var answerId = req.params['aid'];
        answerDao
            .findAnswerById(answerId)
            .then(answer => res.json(answer))
    }

    function findAnswerByQuestion() {

    }

    function findAnswerByStudent() {

    }

    function findAnswer() {

    }

    function updateAnswer(req, res) {
        var answerId = req.params['aid'];
        var answerUpdates = req.body
        answerDao
            .updateAnswer(answerId, answerUpdates)
            .then(status => res.json(status))
    }

    function deleteAnswer(req, res) {
        var answerId = req.params['aid'];
        answerDao
            .deleteAnswer(answerId)
            .then(status => res.json(status))
    }

    app.post('/api/answers', createAnswer);
    app.get('/api/answers', findAllAnswers);
    app.get('/api/answers/:aid', findAnswerById);
    app.put('/api/answers/:aid', updateAnswer);
    app.delete('/api/answers/:aid', deleteAnswer);
    app.get("/api/question/:qid/answer", findAnswerByQuestion);
    app.get("/api/student/:sid/answer", findAnswerByStudent);
    app.get("/api/student/:sid/question/:qid/answer", findAnswer);
    app.get("/api/question/:qid/student/:sid/answer", findAnswer);
}
