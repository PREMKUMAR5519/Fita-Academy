const Patient = require('../models/patientModel')
const User = require('../models/userModel')


const createPatient = async (req, res) => {
   const data = req.body;
   const {email} = req.body;
   try {
    const isUser = await User.findOne({email});
    if(!isUser){
        return res.json({message: 'Patient not exist.'});
    }
    const newPatient = await new Patient(data).save();
    res.json({ message: 'Patient created successfully', patient: newPatient });
   } catch (error) {
        res.json({ message: 'Error in creating patient', error: error.message });
   }

}

//get all patients
async function getAllPatients(req, res) {
  try {
    const allPatients =  await Patient.find({});
    res.json(allPatients)
  } catch (error) {
    res.json({ message: 'Error in fetching patients', error: error.message });
  }
}


//get particular patient data
async function getParticularPatient(req,res){
   const {email}= req.params;
   try {
    const patient = await Patient.findOne({email})
    res.json(patient)
   } catch (error) {
      res.json({message:"Error in fetching patient"})
   }
}

//delete particular doctor data 
async function deletePatient(req,res){
  const {id} = req.params;
  try {
    const deletePat = await Patient.findByIdAndDelete({_id:id});
    res.json(deletePat)
  } catch (error) {
          res.json({message:"Error in deleting patient"})

  }
}

module.exports = { createPatient,getAllPatients,getParticularPatient,deletePatient };