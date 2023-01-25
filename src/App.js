import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// components
import Nav from './components/Header';
import Home from './pages/Home';

import { MovieProvider } from './context/MovieContext';
import ComingSoon from './pages/ComingSoon';

import Search from './components/Search';
import Footer from './components/Footer';
import ScrollUpButton from './components/ScrollUpButton';

// pages
import Detail from "./pages/Detail";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

import Routes from "./routes";

function App() {
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
