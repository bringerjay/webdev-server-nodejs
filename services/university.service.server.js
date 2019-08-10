var universityDao = require('../daos/university.dao.server.js')
var studentDao = require('../daos/student.dao.server.js')
var questionDao = require('../daos/question.dao.server.js')
var answerDao = require('../daos/answer.dao.server.js')

module.exports = function(app) {
	console.log('university service server');

	function populateDatabase(req, res) {
		console.log('populateDatabase')
		var students = req.body.students
		var questions = req.body.questions
		var answers = req.body.answers
		universityDao.populateDatabase(students,questions,answers)
			.then(response => res.send(response))
	}

	function truncateDatabase(req, res) {
		console.log('truncateDatabase')
		universityDao.truncateDatabase()
			.then(status => res.json(status))
	}

	app.post("/api/populate",populateDatabase);
	app.delete("/api/all",truncateDatabase);
}
