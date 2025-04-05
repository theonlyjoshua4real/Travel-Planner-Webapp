const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        // Use Mongoose to connect to the MongoDB Atlas cluster
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully with Mongoose!');
        console.log(mongoose.connection.db.databaseName)
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDB;