
import React from 'react'
import { Link, } from 'react-router-dom';
import { useMovie } from '../../context/MovieContext';
import SearchBar from '../SearchBar'
function Home() {

    const { comingSoon, top250Movies, top250Series, overRequest } = useMovie();

    return (
        <>
            {overRequest ? (
            <div className="flex justify-center bg-red-100 rounded mt-3 mx-3 py-2 my-4">
               <h3 className="text-black font-normal"> API request limit is over. Try later.</h3> 
            </div>) 
            
            : (
                <>
                    <SearchBar type="SearchMovie" />

                    <div className="h-full grid grid-cols-1 sm:grid-cols-1">


                        <div className="pt-5 comingSoon bg-gray-100" >
                            <h3 className="text-center">Coming Soon</h3>
                            <div className="container grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 py-2">
                                {

                                    comingSoon.slice(0, 5).map((item, i) => (
                                        <div key={i} className="max-w-xs rounded bg-white overflow-hidden shadow-md mx-auto">
                                            <img className="w-full" src={item.image} alt="Sunset in the mountains" />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-yellow-500 text-sm mb-2">Release in {item.releaseState}</div>
                                                <div className="font-bold text-black text-xl mb-2">{item.title}</div>
                                                <p className="text-gray-700 text-base h-full">
                                                    {item.plot}
                                                </p>

                                                <Link to={`/detail/${item.id}`} className="no-underline">
                                                    <button className="border-1 border-yellow-500 duration-300 hover:bg-yellow-500 hover:text-white w-full mt-3 rounded text-yellow-500 font-bold">Details</button>
                                                </Link>
                                            </div>
                                            <div className="px-2 pt-2 pb-2">
                                                {
                                                    item.genreList.map((e, i) => (
                                                        <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{e.key}</span>

                                                    ))
                                                }

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex justify-center my-3">
                                <Link to="/comingsoon" className="mx-auto"> <button className="h-10 inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Coming Soon Movies</button></Link>

                            </div>
                        </div>

                        <hr className="p-0 m-0" />

                        <div className="pt-5 top250movies bg-gray-100" >
                            <h3 className="text-center">Top250 Movies</h3>
                            <div className="container grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 py-2">
                                {

                                    top250Movies.slice(0, 5).map((item, i) => (
                                        <div key={i} className="max-w-xs rounded bg-white overflow-hidden shadow-md mx-auto">
                                            <img className="w-80 h-80" src={item.image} alt="Sunset in the mountains" />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-yellow-500 text-sm mb-2">No {item.rank}</div>
                                                <div className="font-bold text-black text-xl mb-2">{item.title}</div>
                                                <p className="font-bold text-sm h-full">
                                                    Imdb Rating: <span className="font-bold text-yellow-500">{item.imDbRating}</span>
                                                </p>

                                                <Link to={`/detail/${item.id}`} className="no-underline">
                                                    <button className="border-1 border-yellow-500 duration-300 hover:bg-yellow-500 hover:text-white w-full mt-3 rounded text-yellow-500 font-bold">Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex justify-center my-3">
                                <Link to="/movies/top250movies" className="mx-auto"> <button className="h-10 inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Movies</button></Link>

                            </div>
                        </div>

                        <hr className="p-0 m-0" />

                        <div className="pt-5 top250series bg-gray-100" >
                            <h3 className="text-center">Top250 Series</h3>
                            <div className="container grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 py-2">
                                {

                                    top250Series.slice(0, 5).map((item, i) => (
                                        <div key={i} className="max-w-xs rounded bg-white overflow-hidden shadow-md mx-auto">
                                            <img className="w-80 h-80" src={item.image} alt="Sunset in the mountains" />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-yellow-500 text-sm mb-2">No {item.rank}</div>
                                                <div className="font-bold text-black text-xl mb-2">{item.title}</div>
                                                <p className="font-bold text-sm h-full">
                                                    Imdb Rating: <span className="font-bold text-yellow-500">{item.imDbRating}</span>
                                                </p>

                                                <Link to={`/detail/${item.id}`} className="no-underline">
                                                    <button className="border-1 border-yellow-500 duration-300 hover:bg-yellow-500 hover:text-white w-full mt-3 rounded text-yellow-500 font-bold">Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex justify-center my-3">
                                <Link to="/series/top250series" className="mx-auto"> <button className="h-10 inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">  Series</button></Link>

                            </div>
                        </div>

                    </div>
                </>
            )}

        </>
    )
}

export default Home

