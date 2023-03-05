const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('../routes/routes');
// threw errors
require('dotenv').config();


var app = express ();
app.use(express.json());
app.use('/api', routes)



const mongoString = 'mongodb+srv://Test123:Test123@cluster0.aijfb4r.mongodb.net/test'
mongoose.connect(mongoString);
const database = mongoose.connection




app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})