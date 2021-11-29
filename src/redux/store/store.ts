import { createStore } from "redux";
import { rootReducer } from "../reducers/inedex";

const store = createStore(rootReducer);

export default store;

export type RootReducerType = ReturnType<typeof rootReducer>;
