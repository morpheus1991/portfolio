import { combineReducers, createStore,compose } from "redux";
import todos from "./todos";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["todos"],
};

export const rootReducer = combineReducers({ todos });
export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, );
export const persistor = persistStore(store);
