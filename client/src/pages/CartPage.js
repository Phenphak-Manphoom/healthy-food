import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartAction";

export default function CartsPage() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <div className="flex-row  mt-10 w-1/2 ">
        <h2 className="text-2xl">My Cart</h2>
        {cartItems.map((item) => {
          return (
            <div className="grid grid-cols-3 gap-4 m-5">
              <div className="text-left">
                <h1>
                  {item.name} [{item.size}]
                </h1>
                <h1>
                  Price : {item.quantity} * {item.prices[0][item.size]} ={" "}
                  {item.price}
                </h1>
                <h1 className="inline">Quantity : </h1>
                <i
                  className="fa-solid fa-plus text-green-700 "
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity + 1, item.size));
                  }}
                ></i>
                <b className="mr-3 ml-3">{item.quantity}</b>
                <i
                  className="fa-solid fa-minus text-red-600"
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity - 1, item.size));
                  }}
                ></i>
                <hr />
              </div>
              <div className="flex justify-center m-auto">
                <img src={item.image} className="w-24 h-24" />
              </div>
              <div className="flex justify-center m-auto ml-3">
                <i className="fa-solid fa-trash text-red-600"></i>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-1/3 justify-center m-10">
        <h1>B</h1>
      </div>
    </div>
  );
}
