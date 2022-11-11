export const getAllFoodsReducers = (state = { foods: [] }, action) => {
  switch (action.type) {
    case "GET_FOODS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_FOODS_SUCCESS":
      return {
        loading: false,
        foods: action.payload,
      };
    case "GET_FOODS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
