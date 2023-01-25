import { createSlice } from "@reduxjs/toolkit";
import { getComingSoon, getMostPopularMovies, getTop250Movies } from "../../extraReducers";



const initialState = {
  top250Movies: [],
  mostPopularMovies: [],
  comingSoonMovies: [],

  loadingTop250Movies: false,
  loadingMostPopularMovies: false,
  loadingComingSoonMovies: false,

  errorMesTop250Movies: "",
  errorMesMostPopularMovies: "",
  errorMesComingSoonMovies: "",
}


export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // top 250 movies
    builder.addCase(getTop250Movies.pending, (state, action) => {
      state.loadingTop250Movies = true;
    })
    builder.addCase(getTop250Movies.fulfilled, (state, action) => {
      state.top250Movies = action.payload;
      state.loadingTop250Movies = false;
    })
    builder.addCase(getTop250Movies.rejected, (state, action) => {
      state.errorMesTop250Movies = action.payload;
      state.loadingTop250Movies = false;
    })

    // most popular movies
    builder.addCase(getMostPopularMovies.pending, (state, action) => {
      state.loadingMostPopularMovies = true;
    })

    builder.addCase(getMostPopularMovies.fulfilled, (state, action) => {
      state.mostPopularMovies = action.payload;
      state.loadingMostPopularMovies = false;
    })

    builder.addCase(getMostPopularMovies.rejected, (state, action) => {
      state.errorMesMostPopularMovies = action.payload;
      state.loadingMostPopularMovies = false;
    })

    // coming soon movies
    builder.addCase(getComingSoon.pending, (state, action) => {
      state.loadingComingSoonMovies = true;
    })
    builder.addCase(getComingSoon.fulfilled, (state, action) => {
      state.comingSoonMovies = action.payload;
      state.loadingComingSoonMovies = false;
    })
    builder.addCase(getComingSoon.rejected, (state, action) => {
      state.errorMesComingSoonMovies = action.payload;
      state.loadingComingSoonMovies = false;
    })
  }
})


export default moviesSlice.reducer;