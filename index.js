const express = require("express");
const cors = require('cors');
require("dotenv").config();
const bodyParser = require('body-parser');
const { connectMongoDB } = require("./Database/db");
const postRouter = require("./ModelsAndControllers/postController");
const userRouter = require("./ModelsAndControllers/userController");

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;
const app = express();
connectMongoDB();
app.use(bodyParser.json());

app.use(cors({origin:"https://frontend-final-lilac-iota.vercel.app/",credentials: true}))

//App Routes
app.use("/user", userRouter);
app.use("/post", postRouter);

app.get("/", (req, res) => {
  res.send("Server running successfully!!!");
});


app.listen(PORT, HOSTNAME, () => {
  console.log(`Server Running Successfully at ${PORT}`);
});
