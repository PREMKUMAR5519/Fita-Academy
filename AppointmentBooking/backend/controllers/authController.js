const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//user register 

async function userRegister(req,res){
    const {email, password} = req.body;
    try {
       const userExisting = await User.findOne({email}) 
       if(userExisting){
        res.json({message:'User already exists'})
        return;
       }
       const hashedPassword = await bcrypt.hash(password, 10);
       const newUser = await new User({email,password:hashedPassword}).save();
       res.json({message:'User registered successfully', user:newUser});

    } catch (error) {
        res.json({message:'Error in user registration', error:error.message});
        
    }         
}

async function userLogin(req,res){
    const {email, password} = req.body;
    try {
    const userExisting = await User.findOne({email})
    if(!userExisting){
        res.json({message:'User does not exist'});
        return;
    }
    const isPasswordMatch = await bcrypt.compare(password,userExisting.password)
    if(!isPasswordMatch){
        res.status(400).json({message:'Invalid credentials'});
        return;
    }

    const token = jwt.sign({email:userExisting.email,id:userExisting._id,role:userExisting.role},process.env.JWT_SECRET,{expiresIn:'1d'});
    res.json({message:'User logged in successfully', token:token});
    } catch (error) {
        res.json({message:'Error in user login', error:error.message});
    }
}

async function test(params) {
    try {
        res.json("working")
    } catch (error) {
        
    }
}
module.exports ={userLogin,userRegister,test}