const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;
require('./models/db')
// const userRoute = require('./routes/userRoute');
// const itemRoute = require('./routes/itemRoute');
// const authenticate = require('./middleware/authenticate');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/' , (req, res ) => {
  res.send('welcome to Satkarma-Seva');
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


