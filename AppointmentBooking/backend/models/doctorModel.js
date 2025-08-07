const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    department:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    availability:{
        type: String,
        default: 'available'
    }

})


const Doctor = mongoose.model('doctors',userSchema)

module.exports = Doctor;