// libraries
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// sections
import MostPopularMovies from '../../sections/Movies/MostPopularMovies';
import Top250Movies from '../../sections/Movies/Top250Movies';

function Movies() {

    const { state } = useLocation();

    // tab = 1 => Most popular, tab = 2 => Top 250
    const [tab, setTab] = useState(1)

    console.log(state)

    useEffect(() => state?.tab === 1 ? setTab(1) : setTab(2), [state])

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
