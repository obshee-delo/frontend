import { configureStore } from "@reduxjs/toolkit";
import checkRegistrationSlice from "./checkRegistrationSlice";
import userSLice from "./userSLice";
import pageSLice from "./changePage";
export const store = configureStore({
  reducer: {
    checkReg: checkRegistrationSlice,
    users: userSLice,
    page: pageSLice,
  },
});
