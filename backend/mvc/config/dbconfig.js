const mongoose = require('mongoose')


async function connectToDb(){
   try {
    await mongoose.connect('mongodb://localhost:27017/app');
    console.log('mongodb connected')
   } catch (error) {
    console.log('connection error',error)
   }
}

module.exports = connectToDb