//express library
import express from "express";
//import controller
import {
  getStudents,
  createStudent,
  deleteStudent,
} from "../controllers/student.js";
//model
import student from "../models/student.js";

//function used when to create a new router object in your program to handle requests
const router = express.Router();

//two arguments are a path and call back function(from the controller student.js)
router.get("/", getStudents);

//post route to create a new student user and call back function (from the controller student.js)
router.post("/", createStudent);

//route to delete student
router.delete("/:id", deleteStudent);

export default router;
