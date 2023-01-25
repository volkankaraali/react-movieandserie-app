import { createSlice } from "@reduxjs/toolkit";
import { getApiInfo } from "../../extraReducers";

const initialState = {
  errorMessage: "",
  count: "",
  maximum: "",
}

export const apiInfoSlice = createSlice({
  name: "apiInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // top 250 movies
    builder.addCase(getApiInfo.fulfilled, (state, action) => {
      state.errorMessage = action.payload;
    })
    builder.addCase(getApiInfo.rejected, (state, action) => {
      state.errorMesTop250Movies = action.payload;
    })

  }
})


export default apiInfoSlice.reducer;