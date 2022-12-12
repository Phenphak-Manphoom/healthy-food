import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
import { registerUser } from "../redux/actions/userAction";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;

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
      dispatch(registerUser(user));
    }
  }
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <div className=" w-2/5 h-3/4 ml-96  bg-gray-100 shadow-2xl mt-28 max-md:ml-14 max-md:w-4/5 ">
        <div className="w-full p-16 ">
          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="Email already registed" />}
          <h1 className="text-lg font-bold">Register</h1>
          <div className="flex flex-col mt-4">
            <input
              required
              type="text"
              name="full-name"
              className="px-4 py-3 w-full rounded-md  bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
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
              className="px-4 py-3 mt-4 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
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
              className="px-4 py-3 mt-4 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
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
              className="px-4 py-3 mt-4 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <button
              onClick={register}
              type="submit"
              className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-green-700  hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex  w-full justify-center items-center font-medium"
            >
              Register
            </button>
            <div className="flex flex-col items-center mt-5">
              <p className="mt-1 text-xs font-light text-gray-500">
                Register already?
                <a href="/login" className="ml-1 font-medium text-green-700">
                  Login now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
