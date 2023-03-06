// libraries
import React from 'react';
import HomeSection from '../../sections/Home/HomeSection';

import Searchbar from "../../components/Searchbar";

// redux 
import { useSelector } from 'react-redux';
import Page from '../../components/Page';

function Home() {

    const { top250Movies, mostPopularMovies, comingSoonMovies, loadingTop250Movies, loadingMostPopularMovies, loadingComingSoonMovies } = useSelector(state => state.movies);

    const { top250Series, mostPopularSeries, loadingTop250Series, loadingMostPopularSeries } = useSelector(state => state.series);


    return (
        <Page title="Homepage">

            <div className='dark:bg-gray-800 px-5 py-10 '>
                <Searchbar />
                <div className='main py-12'>
                    <HomeSection sectionTitle="Coming Soon" sectionName="comingsoon" data={comingSoonMovies} loading={loadingComingSoonMovies} to='/coming-soon' />
                    <HomeSection sectionTitle="Most Popular Movies" sectionName="mostpopularmovies" data={mostPopularMovies} loading={loadingMostPopularMovies} to='/movies' linkState={{ tab: 1 }} />
                    <HomeSection sectionTitle="Most Popular Series" sectionName="mostpopularseries" data={mostPopularSeries} loading={loadingMostPopularSeries} to='/series' linkState={{ tab: 1 }} />
                    <HomeSection sectionTitle="Top 250 Movies" sectionName="top250movies" data={top250Movies} loading={loadingTop250Movies} to='/movies' linkState={{ tab: 2 }} />
                    <HomeSection sectionTitle="Top 250 Series" sectionName="top250series" data={top250Series} loading={loadingTop250Series} to='/series' linkState={{ tab: 2 }} />
                </div>

            </div>
        </Page>

    )
}

export default Home

