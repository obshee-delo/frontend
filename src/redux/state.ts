import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { authApi } from "../services/authApi";
import checkRegistrationSlice from "./checkRegistrationSlice";
import pageSLice from "./changePage";
import authSlice from "./authSlice";
import courseSlice from "./courseSlice";
export const store = configureStore({
  reducer: {
    cource: courseSlice,
    checkReg: checkRegistrationSlice,
    page: pageSLice,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
export type IRootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export const useAppDispatch: () => appDispatch = useDispatch;
setupListeners(store.dispatch);
