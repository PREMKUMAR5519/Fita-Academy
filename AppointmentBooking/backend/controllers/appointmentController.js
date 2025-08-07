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

module.exports ={createAppointment,getAllAppointments,getAppointment}