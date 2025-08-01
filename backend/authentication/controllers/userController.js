const user = require('../model/userModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register user

const registerUser = async (req, res) => {

    const { email, password } = req.body;
    try {
        const existingUser = await user.findOne({ email })
        if (existingUser) {
            return res.json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await new user({ email, password:hashedPassword })
        await newUser.save();
        return res.json({ message: 'User registered successfully' });

    } catch (error) {
        res.json({ message: 'Error registering user', error: error.message });

    }
}


//login 
const userLogin = async(req,res)=>{
    const { email, password } = req.body;
    try {
     const existingUser = await user.findOne({ email })
     if(!existingUser) {
        return res.json({ message: 'User does not exist' });
     }
     const isMatch = await bcrypt.compare(password,existingUser?.password)
      if(!isMatch){
        return res.json({ message: 'Invalid password' });
      }
      const token = jwt.sign({email: existingUser.email,id:existingUser._id},process.env.JWT_SECRET,{expiresIn:'1d'})
      res.json({ message: 'Login successful', token: token });
        
    } catch (error) {
          res.json({ message: 'Error logging in', error:error.message });     
    }
}


async function checkAuth(req,res,next){

    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).json({ message: 'unauthorized token' });
    }
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode)
        if(decode.email){
            //successfully verified
            req.user = decode;

           next()
        }
        else{
            return res.status(401).json({ message: 'invalid token' });
        }

    } catch (error) {
        res.json({ message: 'Error verifying token', error: error.message });
    }
}


//api function
async function getData(req, res) {
    const staffdata = await user.find()
    res.json(staffdata)

    res.json({user:req.user});
}


module.exports = {registerUser,userLogin,getData,checkAuth}