const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
  studentName: {type:String,required:true},
  courseName: { type: String, required: true },
  examinationDateTime: { type: Date, required: true },
  marksObtained: { type: Number, required: true },
  maxMarks: { type: Number, required: true },
});

const Marks = mongoose.model("Marks", marksSchema);

module.exports = Marks;
