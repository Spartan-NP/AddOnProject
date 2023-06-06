const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3003;
const MONGODB_URI = "mongodb://127.0.0.1:27017/AmazonClone";
const APIRouter = require("./Router/APIRouter");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", APIRouter);
console.log("connecting to db...");
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("connected with db");
      console.log("project is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
