import { createSlice } from "@reduxjs/toolkit";
import { getMostPopularSeries, getTop250Series } from "../../extraReducers";


const initialState = {
  top250Series: [],
  mostPopularSeries: [],

  loadingTop250Series: false,
  loadingMostPopularSeries: false,

  errorMesTop250Series: "",
  errorMesMostPopularSeries: "",
}

export const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // top 250 series
    builder.addCase(getTop250Series.pending, (state, action) => {
      state.loadingTop250Series = true;
    })
    builder.addCase(getTop250Series.fulfilled, (state, action) => {
      state.top250Series = action.payload;
      state.loadingTop250Series = false;
    })
    builder.addCase(getTop250Series.rejected, (state, action) => {
      state.errorMesTop250Series = action.payload;
      state.loadingTop250Series = false;
    })

    // most popular series
    builder.addCase(getMostPopularSeries.pending, (state, action) => {
      state.loadingMostPopularSeries = true;
    })

    builder.addCase(getMostPopularSeries.fulfilled, (state, action) => {
      state.mostPopularSeries = action.payload;
      state.loadingMostPopularSeries = false;
    })

    builder.addCase(getMostPopularSeries.rejected, (state, action) => {
      state.errorMesMostPopularSeries = action.payload;
      state.loadingMostPopularSeries = false;
    })

  }
})


export default seriesSlice.reducer;