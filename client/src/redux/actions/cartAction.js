export const addToCart = (food, quantity, size) => (dispatch, getState) => {
  let cartItem = {
    name: food.name,
    _id: food._id,
    image: food.image,
    size: size,
    quantity: Number(quantity),
    prices: food.prices,
    price: food.prices[0][size] * quantity,
  };

  if (cartItem.quantity > 10) {
    alert("You can't add more than10 quantities");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: food });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFormCart = (food) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: food });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
