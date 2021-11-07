import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useMovie } from '../../context/MovieContext'
import MovieService from '../../services/movieService'
import { Spin } from 'antd';
import SearchBar from '../SearchBar'


function Search() {
    const { searchType } = useMovie()

    const { title } = useParams()

    console.log("st" + searchType);
    console.log("tt" + title);
    const [searchData, setsearchData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        let movieService = new MovieService()
        // movieService.searchTitleByType(searchType, title).then(response => {
        //     if (response.data.errorMessage) {
        //         console.log(response.data.errorMessage);
        //     }
        //     setLoading(false)
        //     setsearchData(response.data.results)
        // })
        movieService.searchTitle( title).then(response => {
            if (response.data.errorMessage) {
                console.log(response.data.errorMessage);
            }
            setLoading(false)
            setsearchData(response.data.results)
        })
    }, [title])
    console.log(searchData);
    return (
        <>
        <SearchBar type="SearchMovie"/>

            {
                loading === true ? <Spin /> :
                    searchData?.length === 0 ? 
                    <div className="flex justify-center bg-red-100 rounded mt-3 mx-3 py-2"><h3 className="text-black font-normal">"{title}" not found!</h3></div> 
                    
                    :
                        <div className="container grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 py-2">

                            {
                                searchData?.map((item, i) => (
                                    <div key={i} className="max-w-xs rounded bg-white overflow-hidden shadow-md mx-auto">
                                        <img className="w-full" src={item.image} alt="Sunset in the mountains" />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-black text-xl mb-2">{item.title}</div>
                                            <Link to={`/detail/${item.id}`} className="no-underline">
                                                <button className="border-1 border-yellow-500 duration-300 hover:bg-yellow-500 hover:text-white w-full mt-3 rounded text-yellow-500 font-bold">Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
            }

        </>
    )
}

export default Search
