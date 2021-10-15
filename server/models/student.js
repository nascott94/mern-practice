import mongoose from "mongoose";

//for mongo schema, datatypes
const studentSchema = mongoose.Schema({
  registrationNumber: Number,
  name: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
  subjects: [String],
});

//model
const student = mongoose.model("student", studentSchema);

export default student;
