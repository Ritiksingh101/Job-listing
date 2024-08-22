const express = require("express");
const connectDb = require("./config/db");
const app = express();
const PORT = 5000;
connectDb();

app.use("/api/userDetail", require("./routes/userDetail"))
app.use("/api/recruiter", require("./routes/recruiter"))
app.use("/api/jobdetails", require("./routes/jobdetails"))

app.listen(PORT,()=>console.log("Your server is running on port 5000"));