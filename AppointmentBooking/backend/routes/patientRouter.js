const express = require('express');

const router = express.Router();


const {createPatient,getAllPatients} = require('../controllers/patientController');


router.post('/create',createPatient);
router.get('/',getAllPatients);


module.exports = router;