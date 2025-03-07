const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const postRoutes = require('./routes/postRoutes');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(express.json());
app.use('/api', postRoutes);



// Connect to MongoDB Atlas
mongoose.connect(process.env.DB_URL)
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
  console.log('Error connecting to MongoDB Atlas: ', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
