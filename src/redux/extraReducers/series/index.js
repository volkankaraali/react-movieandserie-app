import { createAsyncThunk } from "@reduxjs/toolkit";
import { imdbApiService } from "../../../services/imdbService";

const getTop250Series = createAsyncThunk("movies/getTop250Series", async () => {
  const response = await imdbApiService.series.getTop250Series();
  console.log(response)
  return response.data.items;
});

const getMostPopularSeries = createAsyncThunk("movies/getMostPopularSeries", async () => {
  const response = await imdbApiService.series.getMostPopularSeries();
  return response.data.items;
});


export { getTop250Series, getMostPopularSeries }