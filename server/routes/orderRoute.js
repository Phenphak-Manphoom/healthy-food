import express from "express";
import { Router } from "express";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";
import Order from "../models/orderModel.js";

const orderRouter = Router();
const stripe = new Stripe(
  "sk_test_51M6PvNLXH3NkI3veM9kzMrY8Ccq48LVIkehZ2sjJvVsNNv5RZsJNHpwkBApyRkFDaDmGvZodUHdCw0KsB74LTbnh00cObd4lcF"
);

orderRouter.post("/placeorder", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "thb",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          line: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          zipCode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      newOrder.save();
      res.send("Order place success");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" + error });
  }
});

orderRouter.post("/getUserOrders", async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await Order.find({ userId: userId }).sort({ _id: -1 });
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

export default orderRouter;
