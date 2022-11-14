import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/userAction";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch=useDispatch();

  function register() {
    if (password !== confirmPassword) {
      alert("password not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
     console.log(user);
     dispatch(registerUser(user))
    }
  }
  return (
    <div className="m-10">
      <div className="container mx-auto p-4 bg-white">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
          <h1 className="text-lg font-bold">Register</h1>
          <div className="flex flex-col mt-4">
            <input
              required
              type="text"
              name="full-name"
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              required
              type="email"
              name="email"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              required
              type="password"
              name="password"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              required
              type="password"
              name="confirm-password"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <button
              onClick={register}
              type="submit"
              className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-teal-500  hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex  w-full justify-center items-center font-medium"
            >
              Register
            </button>
            <div className="flex flex-col items-center mt-5">
              <p className="mt-1 text-xs font-light text-gray-500">
                Register already?
                <a href="" className="ml-1 font-medium text-blue-400">
                  Sign in now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
