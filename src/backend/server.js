const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const connectDB = require('./config/db')

dotenv.config();
const app = express();

// Middleware

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB();
})

