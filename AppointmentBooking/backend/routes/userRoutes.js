const {userRegister,userLogin,test,getAllUsers,updateUsers} = require('../controllers/authController');

const express = require('express');
const router = express.Router();

//user register
router.post('/register', userRegister);

//user login
router.post('/login', userLogin);

router.get('/allusers',getAllUsers)
router.put('/updateuser/:id',updateUsers)


router.get('/',test)

module.exports = router;