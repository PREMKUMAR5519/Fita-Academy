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

//get particular doctor data
async function getParticularDoctor(req,res){
   const {email}= req.body;
   try {
    const doctor = await Doctor.findOne({email})
    res.json(doctor)
   } catch (error) {
      res.json({message:"Error in fetching doctors"})
   }
}

//delete particular doctor data 
async function deleteDoctor(req,res){
  const {id} = req.params;
  try {
    const deleteDoc = await Doctor.findByIdAndDelete({_id:id});
    res.json(deleteDoc)
  } catch (error) {
          res.json({message:"Error in deleting doctor"})

  }
}
async function updateAvailable(req,res){
  const {id} = req.params;
  const {availability} = req.body
  try {
    const updateDoc = await Doctor.findByIdAndUpdate({_id:id},{availability})
    res.json(updateDoc)
  } catch (error) {
              res.json({message:"Error in updating doctor availability"})

  }
}

module.exports = { createDoctor,getAllDoctors,getParticularDoctor,deleteDoctor,updateAvailable };