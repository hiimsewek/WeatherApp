import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { geocodingApi, historyReducer } from "@features/LocationSearch";
import { preferencesReducer } from "@features/WeatherPreferences";

const rootReducers = combineReducers({
  [geocodingApi.reducerPath]: geocodingApi.reducer,
  history: historyReducer,
  preferences: preferencesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [geocodingApi.reducerPath],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(geocodingApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
