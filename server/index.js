import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//object has copy of express package
const app = express();

//deep parsing that can deal with nested objects
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

//cross origin requests
app.use(cors());

//connecting to mongo atlas
const CONNECTION_URL =
  "mongodb+srv://nascott94:pass1@cluster0.kf6xs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
