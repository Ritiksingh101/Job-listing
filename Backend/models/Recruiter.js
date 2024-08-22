const mongoose = require("mongoose");
const recruiterSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
  companyName: String,
  jobPost: Array,
});
module.exports = mongoose.model("Recruiter", recruiterSchema);
