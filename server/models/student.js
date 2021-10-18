import mongoose from "mongoose";

//for mongo schema, datatypes
//needs to match the frontend, in createStudent in the frontend
const studentSchema = mongoose.Schema({
  regNo: Number,
  studentName: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
});

//model
const student = mongoose.model("student", studentSchema);

export default student;
