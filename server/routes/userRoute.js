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

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

userRouter.get("/getAllUsers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

userRouter.post("/deleteUser", async (req, res) => {
  const id = req.body.id;
  try {
    await User.findOneAndDelete({ _id: id });
    res.send("User Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

export default userRouter;
