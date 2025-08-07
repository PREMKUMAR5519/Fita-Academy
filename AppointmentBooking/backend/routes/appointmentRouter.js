const express = require('express');

const router = express.Router();

const {createAppointment,getAllAppointments,getAppointment} = require('../controllers/appointmentController')


router.post('/create',createAppointment)
router.get('/',getAllAppointments)
router.get('/:id',getAppointment)



module.exports = router;