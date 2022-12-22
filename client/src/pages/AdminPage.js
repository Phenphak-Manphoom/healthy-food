import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import AddFood from "./AddFood";
import EditFood from "./EditFood";
import FoodsList from "./FoodsList";
import OrdersList from "./OrdersList";
import UsersList from "./UsersList";

export default function AdminPage() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const dispatch = useDispatch();
  const { currentUser } = userstate;

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col mt-28  ">
          <h1 className="text-3xl mb-2">Admin Panel</h1>
          <ul className="admin mb-3 pt-2 pb-2 pr-72 pl-72  bg-green-700 text-white flex max-md:flex-col">
            <li>
              <Link to={"/admin/usersList"}>Users List</Link>
            </li>
            <li>
              <Link to={"/admin/foodsList"}>Foods List</Link>
            </li>
            <li>
              <Link to={"/admin/addFood"}>Add New Food</Link>
            </li>
            <li>
              <Link to={"/admin/ordersList"}>Orders List</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/usersList" element={<UsersList />} />
            <Route path="/ordersList" element={<OrdersList />} />
            <Route path="/foodsList" element={<FoodsList />} />
            <Route path="/addFood" element={<AddFood />} />
            <Route path="/editFood/:id" element={<EditFood />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
