import reduceers from "./reducers";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const persisConfig = {
  key: "golden-tix",
  storage,
};

const persistedReducer = persistReducer(persisConfig, reduceers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }).concat(
      logger
    ),
});
export const persistedStore = persistStore(store);
export default store;
