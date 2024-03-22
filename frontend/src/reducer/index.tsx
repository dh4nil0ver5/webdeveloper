// reducers.tsx

import { combineReducers } from "redux";
import authReducer from "../authReducer"; // Import your authentication reducer

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers for different parts of your state
});

export default rootReducer;
