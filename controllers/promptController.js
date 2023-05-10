const PromptModel = require('../server/PromptModel');

const StudentController = {
  // Create a new student in the Database
  // Their information will be sent in the request body
  // This should send the created student
  async createStudent(req, res) {
    const {firstName, lastName, age} = req.body;
    // console.log(req.body);
    try {
      const newStudent = await StudentModel.create({
        firstName: firstName,
        lastName: lastName,
        age: age,
      });
      res.send(newStudent);
    } catch(err){
      res.sendStatus(400);
    }
  },

  // Get a student from the database and send it in the response
  // Their first name will be in the request parameter 'name'
  // This should send the found student
  async getStudent(req, res) {
    const {name} = req.params;
    try {
      const student = StudentModel.findOne({firstName: name} || {lastName: name})
      
    } catch (err) {
      res.sendStatus(400);
    }
  },

  // Get a student from the database and update the student
  // The student's first name will be in the request parameter 'name'
  // The student's new first name will be in the request body
  updateStudent(req, res) {

  },

  // Delete a student from the database
  // The student's first name will be sent in the request parameter 'name'
  // This should send a success status code
  deleteStudent(req, res) {

  },
};

module.exports = StudentController;
