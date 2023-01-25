import React from 'react'

function Footer() {
    return (
        <div className=" bg-gray-300 dark:bg-gray-800 p-5 ">
            <div className="flex flex-col text-center ">
                <h5 className="">api Provider <a rel="noreferrer" className="text-yellow-500 font-bold hover:text-yellow-600" target="_blank" href="https://imdb-api.com"> imdb-api.com</a></h5>
                <a rel="noreferrer" className="text-yellow-500 font-bold hover:text-yellow-600" target="_blank" href="https://github.com/volkankaraali">github.com/volkankaraali</a>
            </div>
        </div>
    )
}

export default Footer
