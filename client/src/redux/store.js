import { combineReducers } from "redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllFoodsReducers,
  addFoodReducers,
  getFoodByIdReducers,
  editFoodReducers,
} from "../redux/reducers/foodReducers.js";
import { cartReducer } from "./reducers/cartReducers.js";
import {
  registerUserReducer,
  loginUserReducer,
  getAllUsersReducers,
} from "./reducers/userReducers.js";
import {
  placeOrderReducer,
  getUserOrdersReducer,
  getAllOrdersReducer,
} from "./reducers/orderReducers.js";

const finalReducer = combineReducers({
  getAllFoodsReducers: getAllFoodsReducers,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addFoodReducers: addFoodReducers,
  getFoodByIdReducers: getFoodByIdReducers,
  editFoodReducers: editFoodReducers,
  getAllOrdersReducer: getAllOrdersReducer,
  getAllUsersReducers: getAllUsersReducers,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
