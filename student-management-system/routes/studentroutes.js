// Router(). it is expressjs function use to setup the path
const express = require('express');

const router = express.Router();
//importing the student controller
const { addStudent } = require('../controllers/studentcontroller')

//defining the route
router.post('/add',addStudent);

//finally exporting the router
module.exports = router;