import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import checkRegistrationSlice from "./checkRegistrationSlice";
import userSLice from "./userSLice";
import pageSLice from "./changePage";
import logger from "redux-logger";
import { useDispatch } from "react-redux";
import authReducer from "./auth/authReducer";
export const store = configureStore({
  reducer: {
    checkReg: checkRegistrationSlice,
    users: userSLice,
    page: pageSLice,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ...(process.env.NODE_ENV !== "production" ? [logger] : [])
    ),
});
export type IRootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export const useAppDispatch: () => appDispatch = useDispatch;
