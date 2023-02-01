// libraries
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import numeral from "numeral"
import ReactCountryFlag from 'react-country-flag';
import { useNavigate } from "react-router-dom";

// api service
import { imdbApiService } from '../../services/imdbService';

// components
import Card from '../../components/Card';
import { Skeleton } from '@mui/material';

function Detail() {
    const navigate = useNavigate();
    const { slug } = useParams()
    const { state } = useLocation();

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        if (!state?.id) navigate('/')
    }, [state])


    console.log(slug)
    console.log(state)
    useEffect(() => {
        setLoading(true);
        imdbApiService.search.id(state?.id)
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => { setError(true); console.log(err) })

    }, [state])

    return (
        <div className="detail-content dark:bg-gray-800 ">
            <div className='container mx-auto flex flex-col space-y-5 pt-10'>
                <div className="detail-card flex flex-col lg:flex-row">
                    <img className='w-full h-96 lg:w-1/4 lg:h-full lg:rounded' src={data.image} alt={data.title} loading='lazy' />
                    <div className='detail-content-main p-3 flex flex-col space-y-5 lg:flex-row '>
                        <div className='detail-content flex flex-col space-y-4 lg:px-5'>
                            <div className='details flex flex-row items-center justify-between'>
                                <h2 className='font-bold lg:text-2xl dark:text-white'>{data.fullTitle || "Harry Potter and the Sorcerer's Stone (2001)"}</h2>
                                <div className="rank h-10 px-2 rounded bg-yellow-500 flex flex-col items-center justify-center">
                                    <div className='font-bold'>{data.imDbRating || "-"}</div>
                                    <div className='text-xs'>{numeral(data.imDbRatingVotes).format('0.0a') || "-"}</div>
                                </div>
                            </div>

                            <div className='genres flex flex-wrap mb-3'>
                                {
                                    data.genreList?.map(item => (<div className='border text-yellow-500 text-sm border-yellow-500 px-2 mr-1 mb-1 rounded'>{item.value}</div>
                                    ))
                                }
                            </div>

                            <div className='plot text-xl  dark:text-white'>{data.plot || "-"}</div>

                            <div className='directors flex flex-col'>
                                <div className='font-bold mb-2 dark:text-white border-b-2 border-yellow-500'>DIRECTORS</div>
                                <div className='flex flex-col sm:flex-row sm:flex-wrap lg:flex-col space-y-1 '>
                                    {
                                        data.directorList?.map(item => (
                                            <div className='flex items-center'>
                                                {/* <img className='w-16 h-16 rounded-lg mr-1' src="https://picsum.photos/200/300" alt="" /> */}
                                                <div className='flex flex-wrap'>
                                                    <div className='font-bold text-sm lg:text-base dark:text-gray-300'>{item.name}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>


                            </div>

                            <div className='casts flex flex-col'>
                                <h2 className='font-bold mb-2 dark:text-white border-b-2 border-yellow-500'>CASTS</h2>
                                <div className='flex flex-col sm:flex-row sm:flex-wrap lg:flex-col space-y-1 '>
                                    {
                                        data.starList?.map(item => (
                                            <div className='flex items-center sm:mr-3'>
                                                {/* <img className='w-16 h-16 rounded-lg mr-1 mb-2' src="https://picsum.photos/200/300" alt="" /> */}
                                                <div className=''>
                                                    <div className='font-bold text-sm lg:text-base dark:text-gray-300'>{item.name}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='awards'>
                                <h2 className='font-bold mb-2 dark:text-white border-b-2 border-yellow-500'>AWARDS</h2>
                                <div className='font-bold ark:text-white dark:text-gray-300'>{data.awards}</div>

                            </div>

                        </div>
                        <div className="properties lg:pt-20">
                            <div className='font-bold mb-2 dark:text-white border-b-2 border-yellow-500'>Properties</div>
                            <div className='space-y-1'>
                                <div className='properties-card'>
                                    <div className='text-gray-500 dark:text-gray-400'>Countries</div>
                                    <div>

                                    </div>
                                    {
                                        data.countryList?.map(item => (<div className='dark:text-gray-200'>{item.value} <ReactCountryFlag svg countryCode={item.value} /></div>))
                                    }

                                </div>
                                <div className='properties-card'>
                                    <div className='text-gray-500 dark:text-gray-400'>Languages</div>
                                    {data.languageList?.map(item => <div className='dark:text-gray-200'>{item.value}</div>)}
                                </div>
                                <div className='properties-card'>
                                    <div className='text-gray-500 dark:text-gray-400'>Year</div>
                                    <div className='dark:text-gray-200'>{data.year}</div>
                                </div>
                                <div className='properties-card'>
                                    <div className='text-gray-500 dark:text-gray-400'>Release Date</div>
                                    <div className='dark:text-gray-200'>{data.releaseDate}</div>
                                </div>
                                <div className='properties-card'>
                                    <div className='text-gray-500 dark:text-gray-400'>Cumulative Worldwide Gross</div>
                                    <div className='dark:text-gray-200'>{data.boxOffice?.cumulativeWorldwideGross}</div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="similars p-3 lg:px-0 lg:py-3">
                    <div className='font-bold mb-2 lg:text-2xl dark:text-white border-b-2 border-yellow-500'>Similars</div>
                    <div className="grid grid-cols-1 place-items-center lg:place-items-stretch gap-2 lg:gap-3 sm:grid-cols-3 lg:grid-cols-5">
                        {
                            loading ? (
                                <>
                                    <Skeleton variant="rounded" width={220} height={300} />
                                    <Skeleton variant="rounded" width={220} height={300} />
                                    <Skeleton variant="rounded" width={220} height={300} />
                                    <Skeleton variant="rounded" width={220} height={300} />
                                    <Skeleton variant="rounded" width={220} height={300} />
                                </>

                            )
                                : data.similars?.map(item => <Card key={item.id} item={item} />)
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detail
