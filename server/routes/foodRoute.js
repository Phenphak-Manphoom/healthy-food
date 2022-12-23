import express from "express";
import { Router } from "express";
import Food from "../models/foodModel.js";

const foodRouter = Router();
foodRouter.get("/getAllFoods", async (req, res) => {
  try {
    const foods = await Food.find({});
    res.send(foods);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

foodRouter.post("/getFoodById", async (req, res) => {
  const id = req.body.id;
  try {
    const food = await Food.findOne({ _id: id });
    res.send(food);
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

foodRouter.post("/editFood", async (req, res) => {
  const editfood = req.body.editfood;
  try {
    const food = await Food.findOne({ _id: editfood._id });
    (food.name = editfood.name),
      (food.description = editfood.description),
      (food.image = editfood.image),
      (food.category = editfood.category),
      (food.prices = [editfood.prices]);

    await food.save();
    res.send("Food Details Edited Successfully");
  } catch (error) {
    return res.status(400).json({ massage: error });
  }
});

foodRouter.post("/deleteFood", async (req, res) => {
  const id = req.body.id;
  try {
    await Food.findOneAndDelete({ _id: id });
    res.send("Pizza Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ massage: error });
  }
});
export default foodRouter;
