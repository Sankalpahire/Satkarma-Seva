const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const userRoute = require('./routes/userRoute');
const itemRoute = require('./routes/itemRoute');
const authenticate = require('./middleware/authenticate');

const app = express();
app.use(express.json());

// Public routes (don't need authentication)
app.use('/api/users', userRoute);  // Exclude authentication for login/registration

// Apply authentication middleware only to routes that need it
app.use(authenticate);  // Now all subsequent routes require authentication

// Protected routes (require authentication)
app.use('/api/items', itemRoute);
app.use('/item', require('./routes/itemRoute')); // If you have item routes here as well

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

