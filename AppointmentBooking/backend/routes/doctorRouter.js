const express = require('express');
const router = express.Router();

const {createDoctor,getAllDoctors,getParticularDoctor,deleteDoctor,updateAvailable} = require('../controllers/doctorController');


//create doctor
router.post('/create', createDoctor);
router.get('/', getAllDoctors);
router.post('/doctor',getParticularDoctor)
router.delete('/delete/:id', deleteDoctor)
router.put('/update/:id',updateAvailable)

module.exports = router;    