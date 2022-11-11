export const addToCart = (food, quantity, size) => (dispatch, getState) => {
  let cartItem = {
    name: food.name,
    _id: food._id,
    image: food.image,
    size: size,
    quantity: quantity,
    prices: food.prices,
    price: food.prices[0][size] * quantity,
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
