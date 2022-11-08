import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/authentication/auth.service";
import authSlice from "./features/authentication/auth.slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware), 
  devTools: true,
})