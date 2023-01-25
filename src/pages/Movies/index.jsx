import React from 'react'
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'


import Detail from '../Detail'

import MostPopularMovies from './MostPopularMovies'
import Top250Movies from './Top250Movies'

function Movies() {
    return (
        <>

            {/* <Router>
                <Switch>
                    <div className=" grid grid-cols-1 sm:grid-cols-12">

                        <div className="sm:col-span-2 bg-gray-100">
                            <div className="mt-2">
                                <h3 className="text-base p-0 m-0 text-center">Menu</h3>
                                <ul className="p-0 mt-1">
                                    <Link to="/movies/top250movies" className="no-underline"><li className="text-center text-gray-900 hover:text-white mb-1 bg-yellow-500 ">Top250 </li> </Link>
                                    <Link to="/movies/mostpopularmovies" className="bg-yellow-500 no-underline text-white"><li className="text-center text-gray-900 hover:text-white mb-1 bg-yellow-500 ">Most Popular</li> </Link>
                                </ul>
                            </div>

                        </div>
                        <div className="col-span-10">



                            <Route path="/movies" exact component={Top250Movies}></Route>
                            <Route path="/movies/top250movies" exact component={Top250Movies}></Route>
                            <Route path="/movies/mostpopularmovies" component={MostPopularMovies}></Route>
                            <Route path="/detail/:movie_id" component={Detail}></Route>

                        </div>
                    </div>
                </Switch>
            </Router> */}
        </>
    )
}

export default Movies
