// libraries
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// routes
import Routes from "./routes";

// async thunks
import { getComingSoon, getMostPopularMovies, getMostPopularSeries, getTop250Movies, getTop250Series } from "./redux/extraReducers";


function App() {

  // asyncThunk calls
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTop250Movies())
    dispatch(getMostPopularMovies())
    dispatch(getComingSoon())
    dispatch(getTop250Series())
    dispatch(getMostPopularSeries())
  }, [])

  return (
    <>
      <Routes />
    </>


  );
}

export default App;
