import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IRootState } from "./state";

export const getFilteredCourse = createAsyncThunk(
  "filter/getFilteredCourse",
  async (el) => {
    try {
      const getFilteredData = await axios.get(
        `http://localhost:api.odschool.ru/course/${el}`
      );
      return getFilteredData.data;
    } catch (err) {
      console.log(err);
    }
  }
);
interface IFilteredData {
  filteredData: {}[];
  loading: boolean;
  error: string;
}
const initialState: IFilteredData = {
  filteredData: [],
  loading: false,
  error: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers(building) {
    building.addCase(getFilteredCourse.pending, (state) => {
      state.loading = true;
    }),
      building.addCase(getFilteredCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredData = action.payload;
      });
    building.addCase(getFilteredCourse.rejected, (state, action) => {
      state.error = "wrong";
      state.loading = false;
    });
  },
});
export default filterSlice.reducer;
export const filteredState = (state: IRootState) => state.filter;
