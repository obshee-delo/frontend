import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import type { TypedUseSelectorHook } from "react-redux";
import { authApi } from "../services/authApi";
import checkRegistrationSlice from "./checkRegistrationSlice";
import pageSLice from "./changePage";
import authSlice from "./authSlice";
import courseSlice from "./courseSlice";
import CertainCourceSlice from "./CertainCourceSlice";
import filterCourceSlice from "./filterCourceSlice";
export const store = configureStore({
  reducer: {
    cource: courseSlice,
    checkReg: checkRegistrationSlice,
    page: pageSLice,
    auth: authSlice,
    certain: CertainCourceSlice,
    filter: filterCourceSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
export type IRootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export const useAppDispatch: () => appDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
setupListeners(store.dispatch);
