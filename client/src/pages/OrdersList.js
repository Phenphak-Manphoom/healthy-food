import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error.js";
import Fillter from "../components/Fillter.js";
import Loading from "../components/Loading.js";
import { deliverOrder, getAllOrders } from "../redux/actions/orderAction.js";
export default function OrdersList() {
  const dispatch = useDispatch();
  const getAllOrdersState = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getAllOrdersState;
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    // <div>
    //     {loading && (<Loading/>)}
    //     {error && (<Error error="Something went wrong"/>)}
    //     <table>
    //       <thead>
    //        <tr>
    //         <th>Order Id</th>
    //         <th>Email</th>
    //         <th>User Id</th>
    //         <th>Amount</th>
    //         <th>Date</th>
    //         <th>Status</th>
    //        </tr>
    //       </thead>
    //       <tbody>
    //         {orders && orders.map(order=>{
    //            return <tr>
    //             <td>{order._id}</td>
    //             <td>{order.email}</td>
    //             <td>{order.userId}</td>
    //             <td>{order.orderAmount}</td>
    //             <td>{order.createdAt.substring(0,10)}</td>
    //             <td>status</td>
    //            </tr>
    //         })}
    //       </tbody>
    //     </table>
    // </div>

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Order Id
            </th>
            <th scope="col" class="py-3 px-6">
              Email
            </th>
            <th scope="col" class="py-3 px-6">
              User Id
            </th>
            <th scope="col" class="py-3 px-6">
              Amount
            </th>
            <th scope="col" class="py-3 px-6">
              Date
            </th>
            <th scope="col" class="py-3 px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="py-4 px-6">{order._id}</td>
                  <td class="py-4 px-6">{order.email}</td>
                  <td class="py-4 px-6">{order.userId}</td>
                  <td class="py-4 px-6">{order.orderAmount}</td>
                  <td class="py-4 px-6">{order.createdAt.substring(0, 10)}</td>
                  <td class="py-4 px-6">
                    {order.isDelivered ? (
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Delivered
                      </button>
                    ) : (
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={()=>{dispatch(deliverOrder(order._id))}}
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
