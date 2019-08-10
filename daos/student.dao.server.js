var studentModel = require('../data/models/student.model.server');

function createStudent(student) {
    return studentModel.create(student)
}

function findAllStudents() {
    return studentModel.find()
}

function findStudentById(studentId) {
    return studentModel.findById(studentId)
}

function findStudentByUsername(username) {
    return studentModel.findOne({username: username})
}

function updateStudent(studentId, studentUpdates) {
    return studentModel.update(
        {_id: studentId},
        {$set: studentUpdates}
    )
}

function deleteStudent(studentId) {
    return studentModel.remove({_id: studentId})
}

module.exports = {
    createStudent, findAllStudents, findStudentById,
    findStudentByUsername, updateStudent, deleteStudent
};
