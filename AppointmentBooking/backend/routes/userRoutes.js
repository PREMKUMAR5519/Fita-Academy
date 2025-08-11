const {userRegister,userLogin,test} = require('../controllers/authController');

const express = require('express');
const router = express.Router();

//user register
router.post('/register', userRegister);

//user login
router.post('/login', userLogin);


router.get('/',test)

module.exports = router;