import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const handleCourse = createAsyncThunk("cource/handleCourse", async () => {
  const course = await axios.get("http://localhost:api.odschool.ru/course");
  return course.data;
});
interface ICourse {
  loading: boolean;
  cources: { [key: string]: string }[];
}
const initialState: ICourse = {
  loading: false,
  cources: [{}],
};
const courseSlice = createSlice({
  name: "cource",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleCourse.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(handleCourse.fulfilled, (state, action) => {
        state.cources = action.payload;
      });
  },
});
export default courseSlice.reducer;
