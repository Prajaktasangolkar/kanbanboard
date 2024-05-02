require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRouter =require ("./controller/user.js");
const Profile = require("./model/ProfileModel");
const bcrypt = require("bcrypt");
const connectDB = require("./Db/dbConfig");
const path=require('path')
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
connectDB();
app.get("/getData", async (req, res) => {
  try {
    const { email } = req.query;
    console.log(email);
    if (!email) {
      return res.status(400).json({ error: "Email parameter is missing" });
    }

    const user = await Profile.findOne({
      email: email,
    });

    if (user !== null) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/addData", async (req, res) => {
  try {
    const { username, email, birthdate, phone, age, gender, address } =
      req.body;
    console.log(req.body, "req");
    const isUserExists = await Profile.findOne({
      email: email,
    });
    console.log(email);

    if (isUserExists) {
      console.log("existes");
      return res.status(400).json({
        error:
          "You can edit profile only once!!! (todo: create a update info form)",
      });
    } else {
      const newUser = new Profile({
        username,
        email,
        birthdate,
        phone,
        age,
        gender,
        address,
      });

      const savedUser = await newUser.save();
      console.log("Profile created successfully:", savedUser.email);
      res.status(201).json(savedUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
app.use(express.json());

app.use('/controller/user',UserRouter)
