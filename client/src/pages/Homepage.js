import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/Carousel.js";
import Error from "../components/Error.js";
import Fillter from "../components/Fillter.js";
import Food from "../components/Food.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
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
    <div className="h-full  w-full bg-gray-100 ">
      <Header />
      <Carousel />
      <Fillter />
      <div className="grid grid-cols-3 gap-4 mr-20 ml-20 place-items-center max-md:flex max-md:flex-col max-md:mt-10">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          foods.map((food) => {
            return (
              <div className="w-9/12" key={food._id}>
                <div>
                  <Food food={food} />
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
}
