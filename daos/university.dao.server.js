var studentModel = require('../data/models/student.model.server');
var questionModel = require('../data/models/question.model.server');
var answerModel = require('../data/models/answer.model.server');

function populateDatabase(students,questions,answers) {
	return studentModel.insertMany(students)
			.then(()=> questionModel.insertMany(questions)
				.then(()=>answerModel.insertMany(answers)))
}
function printDatabase() {
let response = []
	 studentModel.find()
		.then(students => response.push(students))
		.then(()=> questionModel.find())
		.then(questions => response.push(questions))
		.then(()=> answerModel.find() )
		.then(answers => {
			response.push(answers)
			return response
		})
}
function truncateDatabase() {
	return answerModel.remove()
		.then(() => questionModel.remove())
		.then(() => studentModel.remove())
}

module.exports = {
	populateDatabase,
	truncateDatabase,
	printDatabase
};
