const mongoose = require('mongoose');
const mongooseUri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

// connect to Mongo a Function

const connectToMongo = () =>{
    mongoose.connect(mongooseUri, ()=>{
        console.log("Connected to Mongoo");
    })
}

module.exports = connectToMongo;