const Doctor = require('../models/doctorModel');
const User = require('../models/userModel');


//create doctor
async function createDoctor(req, res) {
   const data = req.body;
   const {email}= req.body;
   const isUser = await User.findOne({email})
   if(!isUser){
        return res.json({message: 'doctor not exist.'});
   }
   try {
    const newDoctor = await new Doctor(data).save();
    res.json({ message: 'Doctor created successfully', doctor: newDoctor });
   } catch (error) {
     res.json({ message: 'Error in creating doctor', error: error.message });
   }
}
//get all doctors
async function getAllDoctors(req, res) {
  try {
    const allDoctors =  await Doctor.find({});
    res.json(allDoctors)
  } catch (error) {
    res.json({ message: 'Error in fetching doctors', error: error.message });
  }

}

module.exports = { createDoctor,getAllDoctors };