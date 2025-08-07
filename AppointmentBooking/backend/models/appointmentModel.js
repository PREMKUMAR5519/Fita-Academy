const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   patient_id:{
    type:mongoose.Schema.Types.ObjectId
   },
   doctor_id:{
    type:mongoose.Schema.Types.ObjectId
   },
   status:{
    type: String,
    default: 'pending'
   },
   patientName:{
    type: String,
    required: true
   },
   doctorName:{
    type: String,
    required: true
   },
   appointmentDate:{
    type: String,
    required: true
   },
   appointmentTime:{
    type: String,
    required: true
   }
    
},{timestamps: true});


const Appointment = mongoose.model('appointments',userSchema)

module.exports = Appointment;