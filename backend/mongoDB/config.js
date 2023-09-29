//connect to mongodb
const mongoose = require("mongoose");

const URI =
  "mongodb+srv://kuhackfest:kuhackfest@mentalwellai.on7v8xq.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;