import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function Detail() {
    const { id } = useParams()

    const [data, setData] = useState([])

    // useEffect(() => {
    //     let movieService = new MovieService()
    //     movieService.getById(id).then(result => {
    //         console.log(result);
    //         if (result.data.errorMessage) {
    //             console.log("over requestss");
    //         }
    //         setData(result.data)
    //     })
    // }, [id])
    return (
        <>
            <div className="mt-24 p-5">

                {/* movie */}
                <div className="grid grid-cols-1 sm:grid-cols-12 shadow-xl" >
                    <div className="sm:col-span-4">
                        <img className="w-full  object-full " src={data.image} alt={data.fullTitle} />
                    </div>
                    <div className="sm:col-span-8 px-5 py-2">
                        <h3 className=""> {data.fullTitle} </h3>
                        <p className="text-sm font-bold text-yellow-500">Imdb Rating {data.imDbRating}</p>
                        <p className="tracking-wide">{data.plot}</p>
                        <h6 className="">Director: <span className="text-sm font-bold text-yellow-500">{data.directors}</span></h6>
                        <h6>Duration: <span className="text-sm font-bold text-yellow-500">{data.runtimeStr}</span></h6>
                        <h6 className="">
                            Stars: <span className="text-sm font-bold text-yellow-500" >{data.stars} </span>
                        </h6>

                        <h6 className="">
                            Countries: <span className="text-sm font-bold text-yellow-500" >{data.countries} </span>
                        </h6>

                        <h6 className="">
                            Languages: <span className="text-sm font-bold text-yellow-500" >{data.languages} </span>
                        </h6>

                        <div className="">
                            {
                                (data.genreList || []).map((e, i) => (

                                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{e.key}</span>
                                ))
                            }

                        </div>
                    </div>
                </div>



            </div>
            <hr />
            <h3 className="text-center">Similars</h3>
            <div className="container p-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {
                    (data.similars || []).map((e, i) => (
                        <div className="grid grid-cols-2 sm:grid-cols-12 shadow-xl" >
                            <div className="sm:col-span-4">
                                <img className="w-32 h-full  object-full " src={e.image} alt={e.fullTitle} />
                            </div>
                            <div className="sm:col-span-8 px-3 py-2">
                                <h3 className=""> {e.fullTitle} </h3>
                                <div className="flex justify-center my-3">
                                    <Link to={`/detail/${e.id}`} exact className=""> <button className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Details</button></Link>

                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Detail
