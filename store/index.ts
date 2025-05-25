import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { PersistPartial } from "redux-persist/es/persistReducer";
import eventsReducer from "./events/slice";
import { IRootState, rootState } from "./rootState";

const rootReducer = combineSlices({
  event: eventsReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["event"], // List of reducers you want to persist
};

const persistedReducer = persistReducer<IRootState>(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: rootState as IRootState & PersistPartial,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required due to non-serializable data in redux-persist
    }),
});

export const persistor = persistStore(store);
export default store;
