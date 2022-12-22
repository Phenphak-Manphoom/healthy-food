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

export const addFoodReducers = (state = {}, action) => {
  switch (action.type) {
    case "ADD_FOODS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_FOODS_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_FOODS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
