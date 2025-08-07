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
module.exports = { createPatient,getAllPatients };