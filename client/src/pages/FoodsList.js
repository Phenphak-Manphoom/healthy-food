import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../components/Error.js";
import Fillter from "../components/Fillter.js";
import Loading from "../components/Loading.js";
import { getAllFoods, deleteFood } from "../redux/actions/foodAction.js";
export default function FoodsList() {
  const dispatch = useDispatch();
  const foodState = useSelector((state) => state.getAllFoodsReducers);
  const { foods, error, loading } = foodState;
  useEffect(() => {
    dispatch(getAllFoods());
  }, []);
  return (
    <div className="h-screen">
      <h2 className="text-3xl mb-3">Foods List</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse border ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Prices
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {foods &&
            foods.map((food) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={food._id}
                >
                  <td className="py-4 px-6">{food.name}</td>
                  <td className="py-4 px-6">
                    Small: {food.prices[0]["small"]} <br />
                    Medium: {food.prices[0]["medium"]}
                    <br />
                    Large: {food.prices[0]["large"]}
                  </td>
                  <td className="py-4 px-6">{food.category}</td>
                  <td className="py-4 px-6">
                    <i
                      className="fa fa-trash text-red-600"
                      onClick={() => {
                        dispatch(deleteFood(food._id));
                      }}
                    ></i>
                    <Link to={`/admin/editFood/${food._id}`}>
                      <i className="fa fa-edit text-green-700 ml-3"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
