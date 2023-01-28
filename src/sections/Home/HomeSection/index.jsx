import { Skeleton } from '@mui/material';
import React from 'react';

// icons
import { IoMdArrowDropright } from "react-icons/io";
import { useSelector } from 'react-redux';

// mock data
import { MOCK_DATA } from '../../../mocks';


export default function HomeSection({ sectionTitle, sectionName, data, loading }) {

  const { overRequest } = useSelector(state => state.apiInfo)


  if (overRequest) {
    return (
      <section className={`section-${sectionName} container mx-auto p-4`}>
        <div className="section-header flex justify-between mb-2">
          <h1 className='text-yellow-500 dark:text-white text-2xl font-bold'>{sectionTitle}</h1>
          <button type="button" disabled className='dark:text-white text-xl font-bold flex items-center opacity-20 cursor-not-allowed'>
            More Sees <IoMdArrowDropright className='ml-2 mt-1 text-md' />
          </button>
        </div>


        <div className="card grid grid-cols-5">
          {
            MOCK_DATA.map(item => (
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
          loading ? <>
            <Skeleton variant="rounded" width={220} height={300} />
            <Skeleton variant="rounded" width={220} height={300} />
            <Skeleton variant="rounded" width={220} height={300} />
            <Skeleton variant="rounded" width={220} height={300} />
            <Skeleton variant="rounded" width={220} height={300} />
          </>
            : data?.slice(0, 5).map(item => (
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
