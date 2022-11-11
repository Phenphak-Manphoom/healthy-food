import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartAction.js";

export default function Food({ food }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("small");
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToCart(food, quantity, size));
  }
  return (
    <div className="m-3  p-2">
      <h1 className="mb-3">{food.name}</h1>
      <div onClick={() => setShowModal(true)}>
        <img
          src={food.image}
          className="rounded-full m-auto shadow-xl"
          style={{ height: "160px", width: "160px" }}
        />
      </div>

      <div className="flex">
        <div className="flex-1 w-100  m-1">
          <p>Sizes</p>
          <select
            className="w-full border border-gray-400 rounded mt-2 "
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            {food.sizes.map((size, index) => {
              return <option value={size}>{size}</option>;
            })}
          </select>
        </div>
        <div className="flex-1 w-100 m-1">
          <p>Quantity</p>
          <select
            className="w-full border border-gray-400 rounded mt-2"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex m-1 justify-around">
        <div className="w-100">
          <h1>Price : ฿ {food.prices[0][size] * quantity}</h1>
        </div>
        <div className="w-100 ">
          <button
            className="bg-teal-500 text-white font-bold py-1 px-3 rounded"
            onClick={addtocart}
          >
            Add To Cart
          </button>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-2xl">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{food.name}</h3>
                </div>
                {/*body*/}
                <div className="flex m-auto">
                  <img
                    src={food.image}
                    className="h-72 w-72 rounded-lg shadow-xl m-6"
                  />
                  <span className="w-56 text-left text-slate-500 text-lg  mr-5 mt-20">
                    {food.description}
                  </span>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
