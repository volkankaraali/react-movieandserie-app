import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// redux
import { setInputText } from '../../redux/slices/searchbar/searchbarSlice';

function Searchbar() {

    const dispatch = useDispatch();

    const [suggestions, setSuggestions] = useState(false)

    const [input, setInput] = useState("")
    const onChangeHandler = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setInputText(input))
        setSuggestions(true)
    }

    const handleClicked = () => {
        setSuggestions(false)
    }

    return (
        <>
            <div className="flex content-center justify-center mb-2 dark:bg-gray-800">
                <div className="mt-2 relative">
                    <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit}>
                        <input value={input} onChange={onChangeHandler} className="border border-gray-100 outline-none focus:ring-1 focus:ring-yellow-600 rounded px-2 w-80 h-8 mr-1 mb-1 sm:mb-0 dark:border-yellow-500 bg-gray-100" type="text" placeholder="Search Movie Or Serie" />
                        <button className="px-5 py-1 h-8 rounded-md transition duration-500 ease-in-out border border-gray-100 text-yellow-500 font-bold hover:bg-yellow-500 hover:text-white dark:border-yellow-500" >Find!</button>
                    </form>
                    {
                        suggestions && <div className='absolute top-9 w-80 bg-gray-300 dark:bg-gray-800 p-2 rounded'>
                            <ul className='dark:text-white'>
                                <li onClick={() => handleClicked()} className='hover:text-yellow-500 cursor-pointer m-1'>harrpotter</li>
                                <li onClick={() => handleClicked()} className='hover:text-yellow-500 cursor-pointer m-1'>harrpotter</li>
                                <li onClick={() => handleClicked()} className='hover:text-yellow-500 cursor-pointer m-1'>harrpotter</li>
                                <li onClick={() => handleClicked()} className='hover:text-yellow-500 cursor-pointer m-1'>harrpotter</li>
                            </ul>

                        </div>
                    }

                </div>

            </div>
        </>
    )
}

export default Searchbar
