import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterFoods } from "../redux/actions/foodAction";

export default function Fillter() {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");
  return (
    <div
      className="flex justify-center items-center mt-20 mb-10 mr-56 ml-56  h-full bg-green-700 rounded-full max-md:mt-1 max-md:mr-0 max-md:ml-0 max-md:rounded-none"
      id="filter"
    >
      <div className="flex max-md:flex max-md:flex-col">
        <div className="m-5">
          <input
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            value={searchKey}
            type="text"
            className="w-60 h-7 pl-3"
            placeholder="search products"
          />
        </div>
        <div className="m-5">
          <select
            className="w-60 h-7 pl-3"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="salads">Salads</option>
            <option value="soups">Soups</option>
            <option value="sanwishes">Sanwishes</option>
            <option value="toasts">Toasts</option>
            <option value="desserts">Desserts</option>
            <option value="drinks">Drinks</option>
          </select>
        </div>
        <div className="m-5">
          <button
            className="w-44 h-7 bg-black text-white"
            onClick={() => dispatch(filterFoods(searchKey, category))}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
