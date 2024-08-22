const mongoose = require("mongoose")
const UserDetailsSchema = mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String,
  password:String,
  userName:String,
  location:String,
  phoneNumber:Number,
  profilePicture:String,
  designation:String,
  qualifications:String,
  description:String,
  appliedJob:Array,
  bookmarkedJob:Array,
  profilePic: String
})
module.exports = mongoose.model("userDetails",UserDetailsSchema) ;