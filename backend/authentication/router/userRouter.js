const { Router } = require('express');
const {registerUser,userLogin} = require('../controllers/userController')

const router = require('express').Router();


router.post('/register', registerUser);
router.post('/login', userLogin);


module.exports = router;