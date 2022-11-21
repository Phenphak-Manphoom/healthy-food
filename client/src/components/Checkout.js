import React from "react";
import StripeCheckout from "react-stripe-checkout";
export default function Checkout({ subTotal }) {
  const tokenHander = (token) => {
    console.log(token);
  };
  return (
    <div>
      <StripeCheckout
        amount={subTotal * 100}
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
