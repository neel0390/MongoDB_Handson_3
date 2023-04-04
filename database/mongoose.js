const mongoose = require("mongoose");

const url = "mongodb+srv://neel0390:1228neel@cluster0.2ee5gmf.mongodb.net/?retryWrites=true&w=majority";

const connect = async() => {
    try {
        console.log("Connecting to db...")
        const dbConn = await mongoose.connect(url);
        console.log("dbconn =>", dbConn)
    } catch(error) {
        console.log("Error in coneccting db")
    }
}

module.exports = connect;