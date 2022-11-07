import express from "express";
import { db } from "./db.js";
import foodModel from "./models/foodModel.js";
const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working");
});

app.get("/foods", (req, res) => {
  foodModel.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
app.listen(port, () => `server running on port  ${port}`);
