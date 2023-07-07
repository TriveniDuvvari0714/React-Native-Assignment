import { ADD_BUDGET_TO_LIST, GET_BUDGET_LIST } from "../actionTypes";

const budgetlistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BUDGET_TO_LIST:
      return action.payload;
    case GET_BUDGET_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default budgetlistReducer;
