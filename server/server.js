import express from "express";
import { db } from "./utils/db.js";
import foodModel from "./models/foodModel.js";
import foodRouter from "./routes/foodRoute.js";
const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());


app.use("/api/foods/",foodRouter);
app.get("/", (req, res) => {
  res.send("Server working");
});


app.listen(port, () => `server running on port  ${port}`);
