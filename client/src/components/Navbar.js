import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/userAction";
import Fillter from "./Fillter";

export default function () {
  const cartState = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = userstate;

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="w-screen fixed inset-x-0 top-0 bg-green-700  shadow-lg z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/" className="flex items-center">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo-template_23-2149653126.jpg?size=338&ext=jpg&ga=GA1.2.2064050081.1670661951"
                className="mr-3 h-11 w-11 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                alt="Healthy Food Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                Healthy Food
              </span>
            </a>

            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={handleOpenNav}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              openNav ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {currentUser ? (
                <li>
                  <div className="static">
                    <button
                      onClick={handleOpen}
                      className="w-full p-2 text-white rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                      type="button"
                    >
                      {currentUser.name}{" "}
                      <i className="fa-sharp fa-solid fa-circle-down animate-bounce w-6 h-6"></i>
                    </button>

                    {open ? (
                      <ul className="absolute list-none  w-36 max-md:right-28 max-md:top-24 ">
                        <li className=" text-gray-700 text-justify  pt-3 pl-5 bg-white  hover:bg-slate-200 ">
                          <a href="/orders">Orders</a>
                        </li>
                        <li className=" text-gray-700 text-justify pt-3 pl-5 bg-white hover:bg-slate-200">
                          <a onClick={logout} href="#">
                            Logout
                          </a>
                        </li>
                      </ul>
                    ) : null}
                  </div>
                </li>
              ) : (
                <li>
                  <a
                    href="/login"
                    className="block py-2 pr-4 pl-3 text-white rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                  >
                    Login
                  </a>
                </li>
              )}

              <li>
                <a
                  href="/cart"
                  className="inline-flex relative mr-12 items-center p-3 text-sm  text-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                >
                  <i className="fa-sharp fa-solid fa-cart-shopping fa-lg text-white"></i>{" "}
                  <span className="sr-only">Notifications</span>
                  <div className="inline-flex absolute -top-4 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                    {cartState.cartItems.length}
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
