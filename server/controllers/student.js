//GET STUDENT DATA
export const getStudents = async (req, res) => {
  try {
    //go to student model and find all data available in student schema and saves it in the varaible
    const allStudents = await student.find();
    //send back all students to client
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//CREATE NEW STUDENT
export const createStudent = async (req, res) => {
  //access data in string or JSON object from the client side and is stored in student variable
  const student = req.body;
  //passing student variable into student model
  const newStudent = new student(student);

  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
