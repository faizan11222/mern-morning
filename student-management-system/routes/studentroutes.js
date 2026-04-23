// Router(). it is expressjs function use to setup the path
const express = require('express');

const router = express.Router();
//importing the student controller
const { addStudent, getAllStudents, getStudentById } = require('../controllers/studentcontroller')

//defining the route
router.post('/addstudents',addStudent);
//route of getting all students data
router.get('/allstudents',getAllStudents)
//route of getting student by ID
router.get('/getstudent/:id', getStudentById)

//finally exporting the router
module.exports = router;