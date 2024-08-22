// coonect Node.js with database
const mongoose = require("mongoose");

const connectDb = async()=>{

  const con = await mongoose.connect('mongodb+srv://charmnganshul:7803812346@cluster0.fjvoax1.mongodb.net/job-listing',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  console.log("mongodb connected");
}
module.exports = connectDb;