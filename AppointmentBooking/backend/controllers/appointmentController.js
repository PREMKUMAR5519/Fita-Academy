const Appointment = require('../models/appointmentModel')



//create appointment

async function createAppointment(req, res) {
  const data = req.body;
  try {
    const newAppointment = await new Appointment(data).save();
    res.json({ message: 'Appointment created successfully', appointment: newAppointment });
  } catch (error) {
     res.json({ message: 'Error in creating appointment', error: error.message });
  }

}


//get all appointments

async function getAllAppointments(req, res) {

 try {
  const allAppointments = await Appointment.find({});
  res.json(allAppointments);
 } catch (error) {
  res.json({ message: 'Error in fetching appointments', error: error.message });
  
 }
}
//get particular appointment

async function getAppointment(req,res){
  const {id} = req.params;
  try {
    const appointment = await Appointment.findOne({_id:id})
    res.json(appointment);
  } catch (error) {
    res.json({ message: 'Error in fetching appointment', error: error.message });
  }
}
//update status
async function updateStatus(req,res){
  const {id} = req.params
  try {
    const updateAppointment = await Appointment.findByIdAndUpdate({_id:id},{status:"completed"})
    res.json(updateAppointment)
  } catch (error) {
    res.json('something went wrong')
  }
}

//delete appointmet
async function deleteAppointment(req,res){
  const {id} = req.params;
  try {
    const deleteAppoitment = await Appointment.findByIdAndDelete({_id:id})
    res.json({message:"appointment deleted successfully"})
  } catch (error) {
    res.json('something went wrong')
  }
}


//get appointments by patient_id


async function getAppointmentbyPatientid(req,res) {
  const {id} = req.params;
  try {
    const allAppointments = await Appointment.find({patient_id:id})
    res.status(200).json(allAppointments)
  } catch (error) {
    res.status(400).json({message:"error"})
  }
  
}
async function getAppointmentbydoctorid(req,res) {
  const {id} = req.params;
  try {
    const allAppointments = await Appointment.find({doctor_id:id})
    res.status(200).json(allAppointments)
  } catch (error) {
    res.status(400).json({message:"error"})
  }
  
}
module.exports ={createAppointment,getAllAppointments,getAppointment,updateStatus,deleteAppointment,getAppointmentbydoctorid,getAppointmentbyPatientid}