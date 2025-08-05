const {userRegister,userLogin} = require('../controllers/authController');

const express = require('express');
const router = express.Router();

//user register
router.post('/register', userRegister);

//user login
router.post('/login', userLogin);

module.exports = router;