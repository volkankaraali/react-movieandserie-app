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
      {/* <Router>
        <div className="">

          <Nav />
          <main className="" >
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/movies/top250movies" component={Movies}></Route>
              <Route path="/series/top250series" component={Series}></Route>
              <Route path="/comingsoon" component={ComingSoon}></Route>
              <Route path="/search/:title" component={Search}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
            </Switch>
            <ScrollUpButton />
          </main>
          <Footer />
        </div>
      </Router> */}
      <Routes />
    </>


  );
}

export default App;
