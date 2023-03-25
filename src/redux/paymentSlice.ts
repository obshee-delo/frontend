import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const sendPeayload = createAsyncThunk(
  "payment/sendPeayload",
  async (data) => {
    try {
      const response = await axios.post(
        "https://yoomoney.ru/quickpay/confirm.xml",
        data
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);
const initialState = {
  feedBack: null,
};
const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendPeayload.fulfilled, (state, action) => {
      state.feedBack = action.payload;
    });
  },
});
export default paymentSlice.reducer;
