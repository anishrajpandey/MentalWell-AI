const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./Routes/user");
const therapistRouter = require("./Routes/therapist");
const forumRouter = require("./Routes/forum");
const connectDB = require("./mongoDB/config");
const corsOptions = {
    origin: 'http://localhost:5000', // replace with your application's origin
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
  };
  
  // Use the cors middleware with options
  app.use(cors(corsOptions));

    
app.use(express.json());
connectDB();

app.use("/api/user", userRouter);
app.use("/api/therapist", therapistRouter);
app.use("/api/forum", forumRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
