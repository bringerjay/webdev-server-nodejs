
var students = require('../data/students.json');
var questions = require('../data/questions.json');
var answers = require('../data/answers.json');
function createStudent(student) {
	students.push(student);
	return students;
}
function createAnswer(answer) {
	answers.push(answer);
	return answers;
}
function createQuestion(question) {
	questions.push(question);
	return questions;
}
function createAnswerFor(sid,qid,newAnswer) {
	newAnswer.student =  sid
	newAnswer.question = qid
	answers.push(newAnswer)
	return answers
}
function deleteStudent(sid) {
	var index = students.findIndex(student => student._id === sid.toString())
	students.splice(index, 1)
	return students;
}
function deleteQuestion(qid) {
	var index = questions.findIndex(question => question._id === qid.toString())
	questions.splice(index, 1)
	return questions;
}
function deleteAnswer(aid) {
	var index = answers.findIndex(answer => answer._id === aid.toString())
	answers.splice(index, 1)
	return answers;
}
function findAllStudents() {
	return students;
}
function findStudentById(sid) {
	return students.find(student => student._id === sid)
}
function findAllQuestions() {
	return questions;
}
function findQuestionById(qid) {
	return questions.find(question => question._id === qid)
}
function findAllAnswers() {
	return answers;
}
function findAnswerById(aid) {
	return answers.find(answer => answer._id === aid)
}
function findAnswersByStudent(sid) {
	let answersByStudent = []
	for (let i = 0; i < answers.length; i++) {
		if (answers[i].student === sid)
		answersByStudent.push(answers[i])
	}
	return answersByStudent
}
function findAnswersByQuestion(qid) {
	let answerByQuestion = []
	for (let i = 0; i < answers.length; i++){
		if (answers[i].question === qid)
			answerByQuestion.push(answers[i])
	}
	return answers.find(answer => answer._id === aid)
}
function findAnswer(sid,qid) {
	let answerQS = []
	for (let i = 0; i < answers.length; i++) {
		if (answers[i].question === qid && answers[i].student === sid)
			answerQS.push(answers[i])
	}
		return answerQS
}
function updateStudent(newStudent,sid) {
	var index = students.findIndex(student => student._id === sid.toString())
	students[index]=newStudent
	return students
}
function updateQuestion(newQuestion,qid) {
	var index = questions.findIndex(question => question._id === qid.toString())
	questions[index]=newQuestion
	return questions
}
function updateAnswer(newAnswer, aid) {
	var index = answers.findIndex(answer => answer._id === aid.toString())
	answers[index]= newAnswer
	return answers
}
module.exports = {
	createStudent,
	deleteStudent,
	findAllStudents,
	findStudentById,
	findAllQuestions,
	findQuestionById,
	findAllAnswers,
	findAnswerById,
	createQuestion,
	deleteQuestion,
	deleteAnswer,
	createAnswer,
	updateStudent,
	updateQuestion,
	updateAnswer,
	findAnswersByStudent,
	findAnswersByQuestion,
	findAnswer,
	createAnswerFor
};