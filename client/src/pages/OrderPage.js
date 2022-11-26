import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../redux/actions/orderAction";
import Error from "../components/Error.js";
import Loading from "../components/Loading.js";

export default function OrderPage() {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div className="h-screen w-screen mt-28">
      <h2 className="text-3xl m-3">My Orders</h2>
      <hr />
      <div className="flex flex-col justify-center items-center">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div className=" bg-teal-500 mt-3 w-3/4 text-white rounded-xl shadow-xl">
                <div className="flex">
                  <div className="text-left w-4/5 m-3">
                    <h2 className="text-2xl mb-5">Products</h2>

                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p className="text-left">
                            {item.name} [{item.size}] * {item.quantity} ={" "}
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-full m-3">
                    <h2 className="text-2xl mb-5">Address</h2>

                    <p>Line : {order.shippingAddress.line}</p>
                    <p>City : {order.shippingAddress.city}</p>
                    <p>Country : {order.shippingAddress.country}</p>
                    <p>ZipCode : {order.shippingAddress.zipCode}</p>
                  </div>
                  <div className="text-left w-full m-3">
                    <h2 className="text-2xl mb-5">Order Info</h2>

                    <p>Order Amount : {order.orderAmount}</p>
                    <p>Date : {order.createdAt.substring(0, 10)}</p>
                    <p>transaction Id : {order.transactionId}</p>
                    <p>Order Id : {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
