//express library
import express from "express";

//function used when to create a new router object in your program to handle requests
const router = express.Router();
//two arguments are a path and call back function
router.get("/", (req, res) => {
  res.send("routers be working!");
});

export default router;
