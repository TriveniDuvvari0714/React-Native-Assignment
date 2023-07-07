import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADD_BUDGET_TO_LIST, GET_BUDGET_LIST } from "../actionTypes";

export const addBudgettoList = (budgetDetails) => async (dispatch, getState) => {
  try {
    const newBudgetArray = getState().budget
      ? [...getState().budget, budgetDetails]
      : [...[budgetDetails]];

    await AsyncStorage.setItem("budgets", JSON.stringify(newBudgetArray));
    dispatch({
      type: ADD_BUDGET_TO_LIST,
      payload: newBudgetArray,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBudgetList = () => async (dispatch) => {
  try {
    const budgetListInString = await AsyncStorage.getItem("budgets");
    const budgetInArray = JSON.parse(budgetListInString);
    dispatch({
      type: GET_BUDGET_LIST,
      payload: budgetInArray,
    });
  } catch (error) {
    console.log(error.message);
  }
};
