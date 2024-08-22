const mongoose = require("mongoose")
const JobdetailsSchema = mongoose.Schema({
  Title:String,
  Category:String,
  Vacancies:Number,
  Salary:String,
  Jobtype:String,
  Experiencelevel:String,
  Jobtag:String,
  Lastdate:Number,
  Description:Number


})
module.exports = mongoose.model("jobdetails",JobdetailsSchema) ;