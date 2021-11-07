import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMovie } from '../../context/MovieContext'

function Search({type}) {
    const { setSearchInput,setSearchType } = useMovie()

    const [input, setInput] = useState("")
    const onChangeHandler = e => {
        setInput(e.target.value)
    }
    
    setSearchType(type)

    

    const handleSubmit = e => {
        e.preventDefault();
        setSearchInput(input)
        setInput("")
        console.log(input);

    }

    return (
        <>
        <div className="flex content-center justify-center mb-2">
            <div className="mt-2">
                <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit}>
                    <input value={input} onChange={onChangeHandler} className="border-1 border-yellow-500 outline-none focus:ring-1 focus:ring-yellow-600 rounded px-2 w-80 h-8 mr-1 mb-1 sm:mb-0" type="text" placeholder="Search Movie Or Serie" />
                    <Link to={`/search/${input}`}><button className="px-5 py-1 h-8 rounded-md transition duration-500 ease-in-out border-1 border-yellow-500 text-yellow-500 font-bold hover:bg-yellow-500 hover:text-white" >Find!</button> </Link>
                </form>
            </div>

        </div>
        </>
    )
}

export default Search
