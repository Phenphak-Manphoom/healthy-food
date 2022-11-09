import express from "express";
import { Router } from "express";
import foodModel from "../models/foodModel.js";

const foodRouter=Router();
foodRouter.get("/getAllFoods",async(reg,res)=>{
  try {
    const foods=await foodModel.find({});
    res.send(foods);
  } catch (error) {
    return res.status(400).json({message: error})
  }
})

export default foodRouter;