const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    first_name: {
        required: true,
        type: String
    }, 
    last_name: {
        required: true,
        type: String
    },
    Weight: {
        required: true,
        type: String
    },

    Hometown: {
        required: true,
        type: String
    },
    College: {
        required: true,
        type: String
    },
    Age:{
        required: true,
        type: Number
    } ,
    Wins: {
        required: true,
    type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)