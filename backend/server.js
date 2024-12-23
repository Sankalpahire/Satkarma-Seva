const express = require('express');
const app = express();

const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
// const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());  // Built-in middleware for parsing JSON bodies
app.use(cors());  // Enable CORS for all routes

app.get('/', (req, res) => {
    res.send('Welcome to SATKARMA-SEVA');
});

// Routes
app.use('/auth', AuthRouter);
// app.use('/products', ProductRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error Stack:", err.stack);  // Logs the full error stack for debugging
    console.error("Error Message:", err.message);  // Logs the error message
    res.status(500).json({
        message: "Internal Server Error",
        error: err.message,  // Send the error message back in the response
        stack: err.stack,    // Include stack trace for better debugging
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
