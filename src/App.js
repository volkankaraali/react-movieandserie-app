
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Movies from './components/Movies';
import Series from './components/Series';
import Nav from './components/Nav';
import Home from './components/Home';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MovieProvider } from './context/MovieContext';
import ComingSoon from './components/ComingSoon';

import Search from './components/Search';
import Footer from './components/Footer';
import ScrollUpButton from './components/ScrollUpButton';
import MovieOrSerieDetail from './components/MovieOrSerieDetails';

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="">
          
          <Nav />
          <main className="" >
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/movies/top250movies" component={Movies}></Route>
              <Route path="/series/top250series" component={Series}></Route>
              <Route path="/comingsoon" component={ComingSoon}></Route>
              <Route path="/search/:title" component={Search}></Route>
              <Route path="/detail/:id" component={MovieOrSerieDetail}></Route>
            </Switch>
            <ScrollUpButton />
          </main>
          <Footer />
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
