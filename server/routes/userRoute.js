import express from "express";
import { Router } from "express";
import User from "../models/userModel.js";

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    newUser.save();
    res.send("User Registered successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

export default userRouter;