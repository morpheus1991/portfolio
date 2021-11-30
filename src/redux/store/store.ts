import { createStore } from "redux";
import { rootReducer } from "../reducers/inedex";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/lib/persistReducer";

export type RootReducerType = ReturnType<typeof rootReducer>;
