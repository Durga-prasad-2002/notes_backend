const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://durgaprasad9mom:durgaprasad9mom@cluster0.pgrp444.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = async ()=>{
    await mongoose.connect(mongoURI,{family:4})
    console.log("connected");
}

module.exports = connectToMongo;