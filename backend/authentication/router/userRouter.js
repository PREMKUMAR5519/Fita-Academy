const { Router } = require('express');
const {registerUser,userLogin,getData,checkAuth} = require('../controllers/userController')

const router = require('express').Router();


router.post('/register', registerUser);
router.post('/login', userLogin);
router.get('/userdata',checkAuth,getData)


module.exports = router;