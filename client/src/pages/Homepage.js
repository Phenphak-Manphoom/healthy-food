import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Food from "../components/Food.js";
import { getAllFoods } from "../redux/actions/foodAction";

export default function Homepage() {
  const dispatch = useDispatch();
  const foodState = useSelector((state) => state.getAllFoodsReducers);
  const { foods, error, loading } = foodState;
  useEffect(() => {
    dispatch(getAllFoods());
  }, []);
  return (
    <div className="h-screen">
      <div className="grid grid-cols-3 gap-4  place-items-center m-12">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          foods.map((food) => {
            return (
              <div className="w-9/12"  key={food._id}>
                <div>
                  <Food food={food} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
