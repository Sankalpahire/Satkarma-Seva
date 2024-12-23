const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/User");

const signup = async (req, res) => {
    try {
        const { name, email, phoneNumber, password } = req.body;
        console.log('Request Body:', req.body); // Log the request body for debugging

        // Check if the user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists", success: false });
        }

        // Create a new user and hash the password
        const newUser = new UserModel({ name, email, phoneNumber, password });
        newUser.password = await bcrypt.hash(password, 10);

        // Save the new user to the database
        await newUser.save();
        res.status(201).json({
            message: "Sign up completed. Welcome to Satkarma-Seva! Please login to continue.",
            success: true
            
        });
    } catch (err) {
        console.error("Signup Error: ", err);  // Log the error with context
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find the user by email
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed. Email or password is wrong';

        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        // Compare the password entered with the hashed password in the database
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        // Generate a JWT token
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        console.error("Login Error: ", err);  // Log the error with context
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

module.exports = {
    signup,
    login
};
