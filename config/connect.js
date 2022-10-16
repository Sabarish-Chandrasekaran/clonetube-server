const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb DataBase Connected! ${conn.connection.host}`);
  } catch (err) {
    console.log(`error: ${err.message}`);
  }
};
module.exports = connectDB;
