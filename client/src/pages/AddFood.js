import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFood } from "../redux/actions/foodAction";
import Error from "../components/Error.js";
import Loading from "../components/Loading.js";
import Success from "../components/Success.js";

export default function AddFood() {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const addFoodState = useSelector((state) => state.addFoodReducers);
  const { success, loading, error } = addFoodState;
  const formHandler = (e) => {
    e.preventDefault();
    const food = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    console.log(food);
    dispatch(addFood(food));
  };
  return (
    <div className="h-screen">
      <div>
        <h1>Add Food</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New food sdded successfully" />}
        <form onSubmit={formHandler}>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              value={name}
              className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-700 peer max-md:pl-5"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              value={smallPrice}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-700 peer max-md:pl-5"
              placeholder="small size price "
              onChange={(e) => {
                setSmallPrice(e.target.value);
              }}
              required
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              value={mediumPrice}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-700 peer max-md:pl-5"
              placeholder="medium size price"
              onChange={(e) => {
                setMediumPrice(e.target.value);
              }}
              required
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              value={largePrice}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-700 peer max-md:pl-5"
              placeholder="large size price "
              onChange={(e) => {
                setLargePrice(e.target.value);
              }}
              required
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              value={category}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-700 peer max-md:pl-5"
              placeholder="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              required
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              value={description}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-700 peer max-md:pl-5"
              placeholder="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              value={image}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-700 peer max-md:pl-5"
              placeholder="image url"
              onChange={(e) => {
                setImage(e.target.value);
              }}
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
}
