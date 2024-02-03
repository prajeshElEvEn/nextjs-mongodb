const mongoose = require("mongoose");

export default async function connectToDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to Databse > ${conn.connection.host}`);
  } catch (error) {
    throw new Error(error);
  }
}
