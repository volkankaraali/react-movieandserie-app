import React from 'react'
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import MostPopularSeries from './MostPopularSeries'
import SerieDetail from './SerieDetail'
import Top250Series from './Top250Series'


function Series() {
    return (
        <>

            {/* <Router>
                <Switch>
                    <div className="grid grid-cols-1 sm:grid-cols-12">

                        <div className="sm:col-span-2 bg-gray-100">
                            <div className="mt-2">
                                <h3 className="text-base p-0 m-0 text-center">Menu</h3>
                                <ul className="p-0 mt-1">
                                    <Link to="/series/top250series" className="no-underline"><li className="text-center text-gray-900 hover:text-white mb-1 bg-yellow-500 ">Top250 </li> </Link>
                                    <Link to="/series/mostpopularseries" className="bg-yellow-500 no-underline text-white"><li className="text-center text-gray-900 hover:text-white mb-1 bg-yellow-500 ">Most Popular</li> </Link>
                                </ul>
                            </div>

                        </div>
                        <div className="col-span-10">
                            <Route path="/series" exact component={Top250Series}></Route>
                            <Route path="/series/top250series" component={Top250Series}></Route>
                            <Route path="/series/mostpopularseries" component={MostPopularSeries}></Route>
                            <Route path="/serie/:serie_id" component={SerieDetail}></Route>

                        </div>
                    </div>
                </Switch>
            </Router> */}
        </>
    )
}

export default Series
