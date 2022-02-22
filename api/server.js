const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

app.use(express.json());
app.use(cors());

// Configure ENV File & Require Connection File
dotenv.config({path: './config.env'});
require('./db/conn');
const port = process.env.PORT;

app.listen(port, () => console.log("Server started on port 3001"));
