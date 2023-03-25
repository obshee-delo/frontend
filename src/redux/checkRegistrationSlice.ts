import { images } from "../assets/img";
import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "./state";
const initialState = {
  imgLogo: images.hLogo,
  name: "Войти",
};

const checkRegSlice = createSlice({
  name: "checkReg",
  initialState,
  reducers: {
    changeLogo(state) {
      state.imgLogo = images.hChaneLogo;
    },
    backLogo(state) {
      state.imgLogo = images.hLogo;
    },
    changeName(state, { payload }) {
      state.name = payload.name;
    },
  },
});
export default checkRegSlice.reducer;
export const { changeLogo, backLogo, changeName } = checkRegSlice.actions;
export const setHLogo = (state: IRootState) => state.checkReg.imgLogo;
export const setName = (state: IRootState) => state.checkReg.name;
