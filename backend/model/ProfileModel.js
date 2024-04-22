const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  confirmpassword: {
    type: "string",
    required: true,
  },
  
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
