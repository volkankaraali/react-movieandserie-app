import React from 'react';
import { BsArrowRight } from "react-icons/bs"
import { IoMdArrowDropright } from "react-icons/io"
export default function HomeSection({ sectionTitle, sectionName, data }) {

  return (
    <section className={`section-${sectionName} container mx-auto p-4`}>
      <div className="section-header flex justify-between mb-2">
        <h1 className='text-yellow-500 dark:text-white text-2xl font-bold'>{sectionTitle}</h1>
        <button className='dark:text-white text-xl font-bold flex items-center hover:text-yellow-500'>
          More See <IoMdArrowDropright className='ml-2 mt-1 text-md' />
        </button>
      </div>


      <div className="card grid grid-cols-5">
        {
          data?.slice(0, 5).map(item => (
            <div key={item.id} className='relative group w-56 cursor-pointer bg-black rounded'>
              <img className='w-full h-full rounded hover:opacity-30' src={item.image} alt={item.title} loading="lazy" />
              <div className='absolute bottom-3 opacity-0 group-hover:opacity-100 flex items-center transition ease-in-out delay-100 '>
                <div className="rank w-10 h-8 ml-2 rounded bg-yellow-500 flex justify-center items-center">{item.imDbRating || '-'}</div>
                <h1 className='ml-2 text-yellow-500'>{item.title}</h1>
              </div>
            </div>
          ))
        }

      </div>
    </section>
  )
}
