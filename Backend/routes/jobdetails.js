const express = require("express");
const jobdetails = require("../models/jobdetails");
const router = express.Router();


router.post("/", async (req, res) => {
  const postData = new jobdetails(req.body);
  const savePostData = await postData.save();
  res.status(200).json(savePostData);
});

router.get("/", async (req, res) => {
  // res.json(req.jobdetails)
  try {
    const getData = await jobdetails.find(req.body);
    res.status(200).json(getData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.delete("/", async (req, res) => {
  try {
    const deleteData = await jobdetails.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/", async (req, res) => {
  try {
    const upateData = await jobdetails.findById(req.params.id);
    upateData.firstName = req.body.firstName || upateData.firstName;
    upateData.lastName = req.body.lastName || upateData.lastName;
    upateData.password = req.body.password || upateData.password;
    upateData.email = req.body.email || upateData.email;
    upateData.userName = req.body.userName || upateData.userName;
    upateData.location = req.body.location || upateData.location;
    upateData.phoneNumber = req.body.phoneNumber || upateData.phoneNumber;
    upateData.qualifications = req.body.qualifications || upateData.qualifications;
    upateData.description = req.body.description || upateData.description;
    upateData.bookmarkedJob = req.body.bookmarkedJob || upateData.bookmarkedJob;
    upateData.appliedJob = req.body.appliedJob || upateData.appliedJob;
    upateData.profilePic = req.body.profilePic || upateData.profilePic;

    const saveData = await upateData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;

