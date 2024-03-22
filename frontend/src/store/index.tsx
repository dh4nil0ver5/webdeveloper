import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer"; // Import your root reducer

// Optional: Add middleware for handling asynchronous actions (e.g., redux-thunk)
// import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(/* thunk */)); // Uncomment if using middleware

export default store;
