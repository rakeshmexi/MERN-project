const mongoose = require("mongoose");
const mongoURI="mongodb://localhost:27017";

constconnectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connect to mongo successfully");
    })
}

module.exports = connectToMongo;