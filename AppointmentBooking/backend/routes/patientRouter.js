const express = require('express');

const router = express.Router();


const {createPatient,getAllPatients,getParticularPatient,deletePatient} = require('../controllers/patientController');


router.post('/create',createPatient);
router.get('/',getAllPatients);
router.get('/:id',getParticularPatient)
router.delete('/delete/:id',deletePatient)


module.exports = router;