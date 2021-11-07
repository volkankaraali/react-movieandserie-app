import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { useMovie } from '../../context/MovieContext';
import './style.css'

function MostPopularMovies() {

    const { mostPopularMovies } = useMovie()
    const [pageNumber, setPageNumber] = useState(0)

    const moviesPerPage = 10;
    const pageVisited = pageNumber * moviesPerPage;

    const displayMovie = mostPopularMovies.slice(pageVisited, pageVisited + moviesPerPage).map((movie) => (
        <div className="max-w-xs rounded bg-white overflow-hidden shadow-md mx-auto">
            <img className="w-80 h-68" src={movie.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-yellow-500 text-sm mb-2">No {movie.rank}</div>
                <div className="font-bold text-black text-xl mb-2">{movie.title}</div>
                <p className="font-bold text-sm h-full">
                    Imdb Rating: <span className="font-bold text-yellow-500">{movie.imDbRating}</span>
                </p>

                <Link to={`/detail/${movie.id}`} className="no-underline">
                    <button className="border-1 border-yellow-500 duration-300 hover:bg-yellow-500 hover:text-white w-full mt-3 rounded text-yellow-500 font-bold">Details</button>
                </Link>
            </div>
        </div>
    ))

    const pageCount = Math.ceil(mostPopularMovies.length / moviesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <>
        <h3 className="text-center mt-10">Most Popular Movies</h3>
        <div className="container grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-2">
                {/* {

                    top250Movies.map((item, i) => (
                        <div key={i} className="max-w-xs rounded bg-white overflow-hidden shadow-md mx-auto">
                            <img className="w-80 h-68" src={item.image} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-yellow-500 text-sm mb-2">No {item.rank}</div>
                                <div className="font-bold text-black text-xl mb-2">{item.title}</div>
                                <p className="font-bold text-sm h-full">
                                    Imdb Rating: <span className="font-bold text-yellow-500">{item.imDbRating}</span>
                                </p>

                                <Link to={`/movie/${item.id}`} className="no-underline">
                                    <button className="border-1 border-yellow-500 duration-300 hover:bg-yellow-500 hover:text-white w-full mt-3 rounded text-yellow-500 font-bold">Details</button>
                                </Link>
                            </div>
                        </div>
                    ))
                } */}
                {
                    displayMovie
                }
        

            </div>
            <ReactPaginate
                className="paginationMain flex flex-row container justify-center"

                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                pageClassName={"page"}
                pageLinkClassName={"pageA"}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"activeLi"}
                activeLinkClassName={"activeA"}
            />
        </>
    )
}

export default MostPopularMovies
