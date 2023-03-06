import { configureStore } from "@reduxjs/toolkit";
import apiInfoSlice from "./slices/apiInfo/apiInfoSlice";

// slices
import moviesSlice from "./slices/movies/moviesSlice";
import searchbarSlice from "./slices/searchbar/searchbarSlice";
import seriesSlice from "./slices/series/seriesSlice";


export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    series: seriesSlice,
    searchbar: searchbarSlice,
    apiInfo: apiInfoSlice,
  }
})