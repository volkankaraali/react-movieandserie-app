import { createSlice } from "@reduxjs/toolkit";
import { getApiInfo } from "../../extraReducers";

const initialState = {
  count: "",
  errorMessage: "",
  maximum: "",
  apiError: "",
  overRequest: false,
}

export const apiInfoSlice = createSlice({
  name: "apiInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // api info
    builder.addCase(getApiInfo.fulfilled, (state, action) => {
      const { count, errorMessage, maximum } = action.payload;
      state.count = count;
      state.errorMessage = errorMessage;
      state.maximum = maximum;
      if (count > maximum) state.overRequest = true;
    })
    builder.addCase(getApiInfo.rejected, (state, action) => {
      state.apiError = action.payload;
    })

  }
})


export default apiInfoSlice.reducer;