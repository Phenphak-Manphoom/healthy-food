import express from "express";
import { Router } from "express";
import Food from "../models/foodModel.js";

const foodRouter = Router();
foodRouter.get("/getAllFoods", async (reg, res) => {
  try {
    const foods = await Food.find({});
    res.send(foods);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

 foodRouter.post("/addFood", async (req, res) => {
  const food = req.body.food;
  try {
    const newFood = new Food({
      name: food.name,
      image: food.image,
      sizes: ["small", "medium", "large"],
      description: food.description,
      category: food.category,
      prices: [food.prices],
    });
    await newFood.save();
    res.send("New Food Added Successfully");
  } catch (error) {
    return res.status(400).json({ massage: error });
  }
});
export default foodRouter;
