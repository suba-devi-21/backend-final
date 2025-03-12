const express = require("express");
const cors = require('cors');
require("dotenv").config();
const bodyParser = require('body-parser');
const { connectMongoDB } = require("./Database/db");
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;
const app = express();
connectMongoDB();
app.use(bodyParser.json());
app.use(cors({ 
  origin: 'https://aditith.netlify.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));
app.get("/", (req, res) => {
  res.send("Server running successfully!!!");
});
app.use('/api/user',require('./ModelsAndControllers/userController'));
app.use('/api/post',require('./ModelsAndControllers/postController'));

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server Running Successfully at ${PORT}`);
});
