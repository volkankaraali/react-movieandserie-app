import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Card from '../../components/Card';
import usePagination from '../../hooks/usePagination';


import Detail from '../Detail';

import MostPopularMovies from './MostPopularMovies';
import Top250Movies from './Top250Movies';

function Movies() {

    // tab = 1 => Most popular, tab = 2 => Top 250
    const [tab, setTab] = useState(1)

    const handleTab = (tabId) => setTab(tabId);

    return (
        <div className='movies dark:bg-gray-800'>
            <div className='pt-8 flex container mx-auto p-4 justify-between lg:justify-center lg:space-x-60'>
                <button onClick={() => handleTab(1)} className={`${tab === 1 ? 'bg-yellow-500 transition-colors ease-in ' : 'bg-white dark:text-black '} py-1 px-2 rounded `}>Most Popular</button>
                <button onClick={() => handleTab(2)} className={`${tab === 2 ? 'bg-yellow-500 transition-colors ease-in ' : 'bg-white dark:text-black '} py-1 px-2 rounded `}>Top 250</button>
            </div>
            {
                tab === 1 ? <MostPopularMovies /> : <Top250Movies />
            }
        </div>
    )
}

export default Movies
