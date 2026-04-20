//import the packages that we need to use in our server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//load environment variables from .env file
dotenv.config();

//create a variable for using express package
const app = express();

//now indicating the express server to use json format for sending and receiving data
app.use(express.json());

//enabling cors for all routes
app.use(cors());