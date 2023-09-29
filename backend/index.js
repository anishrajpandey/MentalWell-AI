const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./Routes/user");
const connectDB = require("./mongoDB/config");
app.use(express.json());
connectDB();


app.use("/api/user", userRouter);

app.use(cors());


const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
