import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IRootState } from "./state";
export const getCertainCource = createAsyncThunk(
  "certain/getCertainCource",
  async (el: string | undefined) => {
    try {
      const getCource = await axios.get(`course/category/${el}`);
      return getCource.data;
    } catch (err) {
      console.log(err);
    }
  }
);
interface ICource {
  loading: boolean;
  data: {};
  error: string;
}
const initialState: ICource = {
  loading: false,
  data: {},
  error: "",
};

const CertainCourceSlice = createSlice({
  name: "certain",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCertainCource.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCertainCource.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getCertainCource.rejected, (state, action) => {
      state.loading = false;
      state.error = "wrong";
      console.log(state.error);
    });
  },
});
export const certainCourceState = (state: IRootState) => state.certain;

export default CertainCourceSlice.reducer;
