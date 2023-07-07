import { combineReducers } from "redux";
import budgetlistReducer from "./budgetlistReducer";

const rootReducer = combineReducers({
  budget: budgetlistReducer,
});

export default rootReducer;
