// libraries
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// icons
import LoadingIcon from '../../constants/icons/LoadingIcon';

// redux
import { imdbApiService } from '../../services/imdbService';

function Search() {


    const [loading, setLoading] = useState(false);
    const [suggestionsData, setSuggestionsData] = useState(null)
    const [suggestionsModal, setSuggestionsModal] = useState(false)
    const [input, setInput] = useState("")

    const suggestionsModalRef = useRef(null);

    const onChangeHandler = e => setInput(e.target.value)

    useEffect(() => !input && setSuggestionsModal(false), [input])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input) {
            setLoading(true);
            setSuggestionsModal(true)
            imdbApiService.search.title(input)
                .then(res => {
                    console.log(res);
                    setSuggestionsData(res.data.results)
                    setLoading(false);
                })
                .catch(err => console.log(err))
        }
    }

    const handleClicked = () => {
        setSuggestionsModal(false)
    }

    // close the suggestion modal when outside click
    const closeSuggestionsModal = (e) => {
        if (suggestionsModalRef.current && suggestionsModal && !suggestionsModalRef.current.contains(e.target)) {
            setSuggestionsModal(false)
        }
    }

    document.addEventListener('mousedown', closeSuggestionsModal)

    return (
        <>
            <div className="container mx-auto ">
                <img className='rounded hidden lg:flex' src="assets/images/banner.png" alt="banner" loading='lazy' />
                <div className='flex w-full lg:w-96 xl:w-5/12 2xl:w-5/12 lg:absolute lg:inline-flex lg:top-52 lg:left-96 xl:top-64 xl:left-1/3 2xl:left-6/12 2xl:top-72'>
                    <form className="flex flex-col w-full  sm:flex-row  " onSubmit={handleSubmit}>
                        <input value={input} onChange={onChangeHandler} className="border border-gray-100 outline-none focus:ring-1 focus:ring-yellow-600 rounded px-2 w-full h-8 mr-1 mb-1 sm:mb-0 dark:border-yellow-500 bg-gray-100" type="text" placeholder="Search Movie Or Serie" />
                        <button className="px-5 py-1 h-8 rounded-md transition duration-500 ease-in-out border border-gray-100 text-yellow-500 font-bold hover:bg-yellow-500 hover:text-white dark:border-yellow-500" >Find!</button>
                    </form>
                    {
                        suggestionsModal && <div ref={suggestionsModalRef} className='absolute h-52 overflow-auto top-44 w-10/12 md:w-10/12 lg:w-96 xl:w-10/12 2xl:w-10/12 md:top-36 lg:top-10  bg-gray-100 dark:bg-gray-800 border border-yellow-500 p-2 rounded z-10'>
                            {
                                loading ?
                                    <LoadingIcon />
                                    : <ul className='dark:text-white'>
                                        {
                                            suggestionsData.lenght === 0
                                                ? <li className='text-red-500 m-1 '>Upps! No suggestion.</li>
                                                : suggestionsData.map(item => (
                                                    <Link key={item.id} to={`detail/${item.title}`} state={{ id: item.id }} onClick={() => handleClicked()}>
                                                        <li className='hover:text-yellow-500 cursor-pointer m-1'>{item.title}</li>
                                                    </Link>

                                                ))
                                        }

                                    </ul>
                            }

                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Search;
