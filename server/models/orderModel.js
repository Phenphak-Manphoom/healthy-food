import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    userId: { type: String },
    orderItems: [],
    shippingAddress: { type: Object },
    orderAmount: { type: Number, required: true },
    isDelivered: { type: Boolean, required: true, default: false },
    transactionId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("orders", orderSchema);
export default Order;
