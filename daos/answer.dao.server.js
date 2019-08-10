var answerModel = require('../data/models/answer.model.server');

function createAnswer(answer) {
    return answerModel.create(answer)
}

function findAllAnswers() {
    return answerModel.find()
}

function findAnswerById(answerId) {
    return answerModel.findById(answerId)
}

function updateAnswer(answerId, answerUpdates) {
    return answerModel.update(
        {_id: answerId},
        {$set: answerUpdates}
    )
}

function deleteAnswer(answerId) {
    return answerModel.remove({_id: answerId})
}

module.exports = {
    createAnswer, findAllAnswers, findAnswerById
    , updateAnswer, deleteAnswer
};

