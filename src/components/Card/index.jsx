import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ item }) {
  return (
    <Link to={`/detail/${item.title}`} state={{ id: item.id }}>
      <div className='relative group w-64 sm:w-full h-80 cursor-pointer bg-black rounded'>
        <img className='w-full h-full rounded hover:opacity-30' src={item.image} alt={item.title} loading="lazy" />
        <div className='absolute bottom-3 opacity-0 group-hover:opacity-100 flex items-center transition ease-in-out delay-100 '>
          <div className="rank w-10 h-8 ml-2 rounded bg-yellow-500 flex justify-center items-center">{item.imDbRating || '-'}</div>
          <h1 className='ml-2 text-yellow-500'>{item.title}</h1>
        </div>
      </div>
    </Link>

  )
}
