module.exports = function(app) {
	var universityDao = require('../daos/university.dao.server.js')
	function createStudent(req, res) {
		let student = req.body;
		res.json(universityDao.createStudent(student))
	}
	function deleteStudent(req, res) {
		let sid = req.params['sid'];
		res.json(universityDao.deleteStudent(sid))
	}
	function findAllStudents(req, res) {
		res.json(universityDao.findAllStudents());
	}
	function findStudentById(req, res) {
		res.json(
			universityDao.findStudentById(req.params['sid'])
		)
	}
	function createQuestion(req, res) {
		let question = req.body;
		res.json(universityDao.createQuestion(question))
	}
	function deleteQuestion(req, res) {
		let qid = req.params['qid'];
		res.json(universityDao.deleteQuestion(qid))
	}
	function findAllQuestions(req, res) {
		res.json(universityDao.findAllQuestions());
	}
	function findQuestionById(req, res) {
		res.json(
			universityDao.findQuestionById(req.params['qid'])
		)	
	}
	function createAnswer(req, res) {
		let answer = req.body;
		res.json(universityDao.createAnswer(answer))
	}
	function createAnswerFor(req, res) {
		let answer = req.body;
		res.json(universityDao.createAnswerFor(req.params['sid'],req.params['qid'],answer))
	}
	function deleteAnswer(req, res) {
		let aid = req.params['aid'];
		res.json(universityDao.deleteAnswer(aid))
	}
	function findAllAnswers(req, res) {
		res.json(universityDao.findAllAnswers());
	}
	function findAnswerById(req, res) {
		res.json(
			universityDao.findAnswerById(req.params['aid'])
		)
	}
	function findAnswerByQuestion(req, res) {
		res.json(
			universityDao.findAnswersByQuestion(req.params['qid'])
		)
	}
	function findAnswerByStudent(req, res) {
		res.json(
			universityDao.findAnswersByStudent(req.params['sid'])
		)
	}
	function findAnswer(req, res) {
		res.json(
			universityDao.findAnswer(req.params['sid'],req.params['qid'])
		)
	}
	function updateStudent(req, res) {
		let sid = req.params['sid'];
		let student = req.body;
		res.json(universityDao.updateStudent(student,sid));
	}
	function updateQuestion(req, res) {
		let qid = req.params['qid'];
		let question = req.body;
		res.json(universityDao.updateQuestion(question,qid));
	}
	function updateAnswer(req, res) {
		let aid = req.params['aid'];
		let answer = req.body;
		res.json(universityDao.updateAnswer(answer,aid));
	}
	app.put("/api/student/:sid", updateStudent);
	app.put("/api/question/:qid", updateQuestion);
	app.put("/api/answer/:aid", updateAnswer);
	app.post("/api/student", createStudent);
	app.post("/api/question", createQuestion);
	app.post("/api/answer", createAnswer);
	app.post("/api/student/:sid/question/:qid/answer", createAnswerFor);
	app.delete("/api/student/:sid", deleteStudent);
	app.delete("/api/question/:qid", deleteQuestion);
	app.delete("/api/answer/:aid", deleteAnswer);
	app.get("/api/student", findAllStudents);
	app.get("/api/student/:sid", findStudentById);
	app.get("/api/question", findAllQuestions);
	app.get("/api/question/:qid", findQuestionById);
	app.get("/api/answer", findAllAnswers);
	app.get("/api/answer/:aid", findAnswerById);
	app.get("/api/question/:qid/answer", findAnswerByQuestion);
	app.get("/api/student/:sid/answer", findAnswerByStudent);
	app.get("/api/student/:sid/question/:qid/answer", findAnswer);
	app.get("/api/question/:qid/student/:sid/answer", findAnswer);
}