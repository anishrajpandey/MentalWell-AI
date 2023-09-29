const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./Routes/user");



app.use("/api/user", userRouter);

app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
