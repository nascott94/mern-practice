import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();
  const [student, setStudent] = useState({
    regNo: 0,
    studentName: "",
    grade: "",
    section: "",
  });

  const createStudent = () => {
    //when user hits "create" button this event is fired, frontend data will go to backend
    //react request goes to node and saved in datadase, all in form of JSON
    axios.post("http://localhost:5000/students", student);
  };

  return (
    <>
      <h2> Create Student</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Reg No."
          variant="outlined"
          value={student.regNo}
          onChange={(event) => {
            setStudent({ ...student, regNo: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={student.studentName}
          onChange={(event) => {
            setStudent({ ...student, studentName: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Grade"
          variant="outlined"
          value={student.grade}
          onChange={(event) => {
            setStudent({ ...student, grade: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Section"
          variant="outlined"
          value={student.section}
          onChange={(event) => {
            setStudent({ ...student, section: event.target.value });
          }}
        />
        <Button variant="contained" color="primary" onClick={createStudent}>
          Create
        </Button>
      </form>
    </>
  );
}

//in line 28-36, the value student. is referring to the object student set above
