import { createSlice } from "@reduxjs/toolkit";

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
export const coursesState = (state) => state.page.courses;
