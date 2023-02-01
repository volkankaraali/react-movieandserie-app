import { Skeleton } from '@mui/material';
import React from 'react';

// icons
import { IoMdArrowDropright } from "react-icons/io";
import { useSelector } from 'react-redux';
import Card from '../../../components/Card';

// mock data
import { MOCK_DATA } from '../../../mocks';


export default function HomeSection({ sectionTitle, sectionName, data, loading }) {

  const { overRequest } = useSelector(state => state.apiInfo)


  if (overRequest) {
    return (
      <section className={`section-${sectionName} container mx-auto p-4`}>
        <div className="section-header flex justify-between mb-2">
          <h1 className='text-yellow-500 dark:text-white text-base sm:text-xl font-bold'>{sectionTitle}</h1>
          <button type="button" disabled className='dark:text-white text-xs sm:text-md font-bold flex items-center opacity-20 cursor-not-allowed'>
            More Sees <IoMdArrowDropright className='ml-2 mt-1 text-md' />
          </button>
        </div>


        <div className="card grid grid-cols-1 place-items-center gap-2 lg:gap-1 sm:grid-cols-3 lg:grid-cols-5">
          {
            MOCK_DATA.map(item => <Card key={item.id} item={item} />)
          }

        </div>
      </section>
    )
  }

  return (
    <section className={`section-${sectionName} container mx-auto p-4`}>
      <div className="section-header flex justify-between mb-2">
        <h1 className='text-yellow-500 dark:text-white text-base sm:text-xl font-bold'>{sectionTitle}</h1>
        <button className='text-gray-300 dark:text-white text-xs sm:text-md font-bold flex items-center hover:text-yellow-500'>
          More See <IoMdArrowDropright className=' text-md' />
        </button>
      </div>


      <div className="card grid grid-cols-1 place-items-center gap-2 lg:gap-1 sm:grid-cols-3 lg:grid-cols-5">
        {
          loading ? <>
            <Skeleton variant="rounded" width={220} height={300} />
            <Skeleton variant="rounded" width={220} height={300} />
            <Skeleton variant="rounded" width={220} height={300} />
            <Skeleton variant="rounded" width={220} height={300} />
            <Skeleton variant="rounded" width={220} height={300} />
          </>
            : data?.slice(0, 5).map(item => <Card key={item.id} item={item} />)
        }

      </div>
    </section>
  )
}
