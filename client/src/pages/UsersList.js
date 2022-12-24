import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../redux/actions/orderAction.js";
import { getAllUsers, deleteUser } from "../redux/actions/userAction.js";
import Error from "../components/Error.js";
import Fillter from "../components/Fillter.js";
import Loading from "../components/Loading.js";

export default function UsersList() {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.getAllUsersReducers);
  const { users, error, loading } = usersState;
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="h-screen">
      <h2 className="text-3xl mb-3">Users List</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse border ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              User Id
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={user._id}
                >
                  <td className="py-4 px-6">{user._id}</td>
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className="py-4 px-6">
                    <i
                      className="fa fa-trash text-red-600"
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
