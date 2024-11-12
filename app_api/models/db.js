const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect(
            "mongodb+srv://stephen:Stephen13@cluster0.uw5um.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
           //"mongodb+srv://donnaaagn:donna17@cluster0.1ns9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("MongoDB Connected..");
    } catch(error){
        console.error("MongoDB connection error :", error);
        process.exit(1);
    }
};

module.exports = connectDB;






