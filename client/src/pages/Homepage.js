import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error.js";
import Food from "../components/Food.js";
import Loading from "../components/Loading.js";
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
      <div className="grid grid-cols-3 gap-4  place-items-center mt-28">
        {loading ? (
          <Loading/>
        ) : error ? (
          <Error error="Something went wrong" />
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
