const mongoose = require('mongoose');

const patientSchwema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true, 
    },
    age:{
        type: Number,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})

const Patient = mongoose.model('patients',patientSchwema)

module.exports = Patient;