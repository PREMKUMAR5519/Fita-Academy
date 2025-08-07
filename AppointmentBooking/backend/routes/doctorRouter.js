const express = require('express');
const router = express.Router();

const {createDoctor,getAllDoctors} = require('../controllers/doctorController');


//create doctor
router.post('/create', createDoctor);
router.get('/', getAllDoctors);

module.exports = router;    