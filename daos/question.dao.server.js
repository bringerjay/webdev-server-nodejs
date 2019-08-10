var questionModel = require('../data/models/question.model.server');

function createQuestion(question) {
    return questionModel.create(question)
}

function findAllQuestions() {
    return questionModel.find()
}

function findQuestionById(questionId) {
    return questionModel.findById(questionId)
}

function findQuestionByText(text) {
    return questionModel.findOne({question: text})
}

function updateQuestion(questionId, questionUpdates) {
    return questionModel.update(
        {_id: questionId},
        {$set: questionUpdates}
    )
}

function deleteQuestion(questionId) {
    return questionModel.remove({_id: questionId})
}

module.exports = {
    createQuestion, findAllQuestions, findQuestionById,
    findQuestionByText, updateQuestion, deleteQuestion
};
