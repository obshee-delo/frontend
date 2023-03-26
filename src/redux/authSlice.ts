import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState } from "./state";
export interface IAuthSlice {
  name: string | null;
  sureName: string | null;
  email: string | null;
  password: string | null;
  phone: string | null;
  link: string | null;
  token: string | null;
}
const initialState: IAuthSlice = {
  name: null,
  sureName: null,
  email: null,
  password: null,
  phone: null,
  link: null,
  token: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IAuthSlice>) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: action.payload.name,
          sureName: action.payload.sureName,
          email: action.payload.email,
          password: action.payload.password,
          phone: action.payload.phone,
          link: action.payload.link,
          token: action.payload.token,
        })
      );
      state.name = action.payload.name;
      state.sureName = action.payload.sureName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.link = action.payload.link;
      state.phone = action.payload.phone;
      state.token = action.payload.token;
    },
    logOut(state) {
      localStorage.clear();
      state.name = null;
      state.sureName = null;
      state.email = null;
      state.password = null;
      state.link = null;
      state.phone = null;
      state.token = null;
    },
  },
});
export const { setUsers, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectAuth = (state: IRootState) => state.auth;
