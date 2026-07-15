const mongose = require("mongoose");

const connectDB = async ()=>{
    try {
        const conn = await mongose.connect(process.env.MONGODB);
        console.log(`Databas connect successfull ${conn.connection.host}`)
    } catch (error) {
        console.log(`Database not connect ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;