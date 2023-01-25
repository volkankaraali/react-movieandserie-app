import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { useMovie } from '../../context/MovieContext'
import './style.css'

function ComingSoon() {

    const { comingSoon } = useMovie();
    const [pageNumber, setPageNumber] = useState(0)

    const moviesPerPage = 10;
    const pageVisited = pageNumber * moviesPerPage;

    console.log(comingSoon);
    const displayComingSoon = comingSoon.slice(pageVisited, pageVisited + moviesPerPage).map((movie, i) => (
        <div key={i} className="max-w-xs rounded bg-white overflow-hidden shadow-md mx-auto">
            <img className="w-full" src={movie.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-yellow-500 text-sm mb-2">Release in {movie.releaseState}</div>
                <div className="font-bold text-black text-xl mb-2">{movie.title}</div>
                <p className="text-gray-700 text-base h-full">
                    {movie.plot}
                </p>

                <Link to={`movie/${movie.id}`} className="no-underline">
                    <button className="border-1 border-yellow-500 duration-300 hover:bg-yellow-500 hover:text-white w-full mt-3 rounded text-yellow-500 font-bold">Details</button>
                </Link>
            </div>
            <div className="px-2 pt-2 pb-2">
                {
                    movie.genreList.map((e, i) => (
                        <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{e.key}</span>

                    ))
                }

            </div>
        </div>
    ))

    const pageCount = Math.ceil(comingSoon.length / moviesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <>
            <div className="container grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 py-2">
                {/* {

                comingSoon.map((item, i) => (
                    <div key={i} className="max-w-xs rounded overflow-hidden shadow-md mx-auto">
                        <img className="w-full" src={item.image} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-yellow-500 text-sm mb-2">Release in {item.releaseState}</div>
                            <div className="font-bold text-black text-xl mb-2">{item.title}</div>
                            <p className="text-gray-700 text-base h-full">
                                {item.plot}
                            </p>

                            <Link to={`movie/${item.id}`} className="no-underline">
                                <button className="border-1 border-yellow-500 duration-300 hover:bg-yellow-500 hover:text-white w-full mt-3 rounded text-yellow-500 font-bold">More Details..</button>
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
            } */}

                {
                    displayComingSoon
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

export default ComingSoon
