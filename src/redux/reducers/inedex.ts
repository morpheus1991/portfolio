import { combineReducers } from "redux";
import todosReducer from "./todos";

// const reducers = [todoReducer];
export const rootReducer = combineReducers({ todosReducer });
