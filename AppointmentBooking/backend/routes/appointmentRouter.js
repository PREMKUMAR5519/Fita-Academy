const express = require('express');

const router = express.Router();

const {createAppointment,getAllAppointments,getAppointment,updateStatus,deleteAppointment,getAppointmentbyPatientid,getAppointmentbydoctorid} = require('../controllers/appointmentController')


router.post('/create',createAppointment)
router.get('/',getAllAppointments)
router.get('/:id',getAppointment)
router.put('/update/:id',updateStatus)
router.delete('/delete/:id',deleteAppointment)
router.get('/bypatient/:id',getAppointmentbyPatientid)
router.get('/bydoctor/:id',getAppointmentbydoctorid)



module.exports = router;