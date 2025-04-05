const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db') 

const userRoutes = require('./routes/userRoutes'); // User routes
const itineraryRoutes = require('./routes/itineraryRoutes'); // Itinerary routes



dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes); // User routes
app.use('/api/itineraries', itineraryRoutes); // Itinerary routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB();

})

