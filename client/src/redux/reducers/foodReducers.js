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

export const getFoodByIdReducers = (state = {}, action) => {
  switch (action.type) {
    case "GET_FOODBYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_FOODBYID_SUCCESS":
      return {
        loading: false,
        food: action.payload,
      };
    case "GET_FOODBYID_FAILED":
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

export const editFoodReducers = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_FOODS_REQUEST":
      return {
        editLoading: true,
        ...state,
      };
    case "EDIT_FOODS_SUCCESS":
      return {
        editLoading: false,
        editSuccess: true,
      };
    case "EDIT_FOODS_FAILED":
      return {
        editError: action.payload,
        editLoading: false,
      };

    default:
      return state;
  }
};
