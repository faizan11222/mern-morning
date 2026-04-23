//import the packages that we need to use in our server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//import the database connection function from config/db.js file
const connectDB = require('./config/db');

//importing the route file
const studentRoutes = require('./routes/studentroutes')

//load environment variables from .env file
dotenv.config();

//call the database connection function to connect to MongoDB
connectDB();

//create a variable for using express package
const app = express();


//now indicating the express server to use json format for sending and receiving data
app.use(express.json());

//enabling cors for all routes
app.use(cors());


//router calling
app.use('/api/students',studentRoutes);

//running nodejs on registered port
//getting port from .env file
const PORT = process.env.PORT


//running the server on this port now
app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`)
})

