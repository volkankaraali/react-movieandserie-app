import { createAsyncThunk } from "@reduxjs/toolkit";
import { imdbApiService } from "../../../services/imdbService";

const getApiInfo = createAsyncThunk("apiInfo/getApiInfo", async () => {
  const response = await imdbApiService.usage.getUsage();
  return response.data;
});

export { getApiInfo }