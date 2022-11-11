import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function () {
  const cartState = useSelector((state) => state.cartReducer);
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-lg">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="" className="flex items-center">
            <img
              src="https://st3.depositphotos.com/30746508/34717/v/1600/depositphotos_347179834-stock-illustration-healthy-food-logo-template-natural.jpg"
              className="mr-3 h-6 sm:h-9"
              alt="Healthy Food Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Healthy Food
            </span>
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Cart {cartState.cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
