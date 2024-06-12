const express = require("express");
const userModel = require("./model/user");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: "image/" });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const multerFilter = function (req, file, cb) {
  const fileTypes = /jpeg|jpg|png|gif/;
};

app.get("/", (req, res) => {
  res.send("welcome");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  try {
    console.log(`listening to port ${PORT}`);
  } catch (error) {
    console.log("failed to connect db");
  }
});
