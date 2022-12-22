import axios from "axios";

export const getAllFoods = () => async (dispatch) => {
  dispatch({ type: "GET_FOODS_REQUEST" });
  try {
    const response = await axios.get("/api/foods/getAllFoods");
    console.log(response);
    dispatch({ type: "GET_FOODS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_FOODS_FAILED", payload: error });
  }
};

export const filterFoods = (searchKey, category) => async (dispatch) => {
  let filteredFoods;
  dispatch({ type: "GET_FOODS_REQUEST" });
  try {
    const response = await axios.get("/api/foods/getAllFoods");
    filteredFoods = response.data.filter((food) =>
      food.name.toLowerCase().includes(searchKey)
    );
    if (category !== "all") {
      filteredFoods = response.data.filter(
        (food) => food.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_FOODS_SUCCESS", payload: filteredFoods });
  } catch (error) {
    dispatch({ type: "GET_FOODS_FAILED", payload: error });
  }
};

export const addFood = (food) => async (dispatch) => {
  dispatch({ type: "ADD_FOODS_REQUEST" });
  try {
    const response = await axios.post("/api/foods/addFood", {food});
    console.log(response);
    dispatch({ type: "ADD_FOODS_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_FOODS_FAILED", payload: error });
  }
};
