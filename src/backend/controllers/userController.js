const User = require('../models/User');
const bcrypt = require('bcrypt');

// Create a new user
const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({name, email, password: hashedPassword});
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400)
    }
};

// Get all users
const getAllUsers = async(req,res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = {createUser, getAllUsers};