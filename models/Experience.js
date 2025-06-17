const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  company: String,
  position: String,
  description: String,
  startDate: String,
  endDate: String,
});

module.exports = mongoose.model("Experience", ExperienceSchema);
