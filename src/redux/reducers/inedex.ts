import { combineReducers } from "redux";
import todos from "./todos";

// const reducers = [todoReducer];
export const rootReducer = combineReducers({ todos });
