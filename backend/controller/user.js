const User = require("../model/userModel");
const Profile = require("../model/ProfileModel");
const express=require('express')
const router = express.Router();
const bcrypt = require("bcrypt");


router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);
        const isUserExists = await User.findOne({ username: username });
    
        if (isUserExists) {
          return res.status(400).json({ error: "user already exists" });
        } else {
          const hashedPassword = await bcrypt.hash(password, 10);
    
          const newUser = new User({
            username,
            password: hashedPassword,
          });
          const savedUser = await newUser.save();
          console.log("User created successfully:", savedUser.username);
          res.status(201).json(savedUser);
        }
      } catch (err) {
        res.status(500).json(err);
      }
})

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);
        const user = await User.findOne({ username: username });
        console.log(user.username, user.password);
        if (user) {
          const passwordMatch = await bcrypt.compare(password, user.password);
    
          if (passwordMatch) {
            res.status(200).json({ message: "User verified" });
          } else {
            res.status(401).json({ error: "Invalid credentials" });
          }
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      }

});

module.exports = router;