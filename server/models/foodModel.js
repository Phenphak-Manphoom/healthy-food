import mongoose from "mongoose";

const foodSchema = mongoose.Schema(
  {
    name: { type: String },
    sizes: [],
    prices: [],
    category: { type: String },
    image: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const foodModel = mongoose.model("foods", foodSchema);
export default foodModel;
