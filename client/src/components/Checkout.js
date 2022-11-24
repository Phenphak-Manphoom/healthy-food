import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../redux/actions/orderAction";

export default function Checkout({ subtotal }) {
  const dispatch = useDispatch();
  function tokenHander(token){
    console.log(token);
    dispatch(placeOrder(token,subtotal))
  };
  return (
    <div>
      <StripeCheckout
        amount= {subtotal*100}
        shippingAddress
        token={tokenHander}
        stripeKey="pk_test_51M6PvNLXH3NkI3veOEhJeDbVXsnEBUF2XD2Ml0A67aJKFlVLes3s4HEY90Xffbg6pRAIoV08lJmH1cQmD66zWg9o008gmR7yrr"
        currency="THB"
      >
        <button className="bg-red-700  text-white font-bold py-2 px-4 rounded mt-4">
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
}
