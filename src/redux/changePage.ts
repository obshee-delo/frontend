import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "./state";

const initialState = {
  courses: [],
};
const pageSLice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changePage(state, { payload }) {
      state.courses = payload;
    },
    backPage(state) {
      state.courses = [];
    },
  },
});
export default pageSLice.reducer;
export const { changePage, backPage } = pageSLice.actions;
export const coursesState = (state: IRootState) => state.page.courses;
