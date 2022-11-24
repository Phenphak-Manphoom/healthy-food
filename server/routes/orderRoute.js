import express from "express";
import { Router } from "express";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";
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
        amount: subtotal*100,
        currency: "thb",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      res.send("Payment Done");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" + error });
  }
});

export default orderRouter;
