import { createAsyncThunk } from "@reduxjs/toolkit";
import { imdbApiService } from "../../../services/imdbService";

const getTop250Movies = createAsyncThunk("movies/getTop250Movies", async () => {
  const response = await imdbApiService.movies.getTop250Movies();
  return response.data.items;
});

const getMostPopularMovies = createAsyncThunk("movies/getMostPopularMovies", async () => {
  const response = await imdbApiService.movies.getMostPopularMovies();
  return response.data.items;
});

const getComingSoon = createAsyncThunk("movies/getComingSoon", async () => {
  const response = await imdbApiService.movies.comingSoon();
  return response.data.items;
});


export { getTop250Movies, getComingSoon, getMostPopularMovies }