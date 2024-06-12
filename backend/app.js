const express = require("express");
const userModel = require("./model/user");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MULTER FUNCTIONS

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "image");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// ROUTES

app.get("/", (req, res) => {
  res.send("welcome");
});

// app.post("/upload-single", uploadStorage.single("image"), (req, res, err) => {
//   if (err) {
//     console.log("err", err);
//     return;
//   }
//   console.log(req.file);
//   res.send("File Uploaded");
// });

app.post("/upload-single", upload.array("image", 10), (req, res, err) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log(req.file);
  res.send("Multiple File Uploaded");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  try {
    console.log(`listening to port ${PORT}`);
  } catch (error) {
    console.log("failed to connect db");
  }
});
