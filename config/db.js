const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb://0.0.0.0:27017/hospital',{
           
    });
        console.log('MongoDb connected');
    }
    catch(err){
        console.log(`Error :${err.message}`);
    }
};
module.exports={connectDB}