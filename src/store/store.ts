import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { geocodingApi, historyReducer } from "@features/LocationSearch";
import { preferencesReducer } from "@features/WeatherPreferences";
import { weatherApi } from "@features/WeatherDashboard";

const rootReducers = combineReducers({
  [geocodingApi.reducerPath]: geocodingApi.reducer,
  history: historyReducer,
  preferences: preferencesReducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [geocodingApi.reducerPath, weatherApi.reducerPath],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(geocodingApi.middleware, weatherApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
