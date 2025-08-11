const express = require('express');

const router = express.Router();

const {createAppointment,getAllAppointments,getAppointment,updateStatus,deleteAppointment} = require('../controllers/appointmentController')


router.post('/create',createAppointment)
router.get('/',getAllAppointments)
router.get('/:id',getAppointment)
router.put('/update/:id',updateStatus)
router.delete('/delete/:id',deleteAppointment)



module.exports = router;