const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./Routes/user");
const therapistRouter = require("./Routes/therapist");
const forumRouter = require("./Routes/forum");
const connectDB = require("./mongoDB/config");
app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/user", userRouter);
app.use("/api/therapist", therapistRouter);
// app.use("/api/forum", forumRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
