const express = require('express');
const app = express();
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
// const ProductRouter = require('./Routes/ProductRouter');
const TotalPostsRoute = require('./routes/TotalPostsRouter'); 
const UserCountRoute = require('./routes/UserCountRouter'); 
const ActivePostsRoute = require('./routes/ActivePostsRouter');

require('dotenv').config();
require('./models/db');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());  
app.use(cors());  

app.get('/', (req, res) => {
    res.send('Welcome to SATKARMA-SEVA');
});

// Routes
app.use('/auth', AuthRouter);
// app.use('/products', ProductRouter);
app.use('/api/contributors', UserCountRoute); 
// app.use('/api/helping-hands', TotalPostsRoute); 
// app.use('/api/available-items', ActivePostsRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error Stack:", err.stack); 
    console.error("Error Message:", err.message); 
    res.status(500).json({
        message: "Internal Server Error",
        error: err.message,  
        stack: err.stack,    
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
