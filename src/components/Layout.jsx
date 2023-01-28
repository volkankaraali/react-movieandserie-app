// libraries
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux';

// components
import Footer from './Footer';
import Header from "./Header";
import { getApiInfo } from '../redux/extraReducers';


export default function Layout() {
  const dispatch = useDispatch();
  const { overRequest, count, maximum } = useSelector(state => state.apiInfo);

  useEffect(() => dispatch(getApiInfo()), [dispatch])

  return (
    <>
      {overRequest && <div className='bg-red-200 text-red-600 h-10 flex justify-center items-center'>Api request is over. Please try later. ({count}/{maximum}) </div>}
      <Header />
      <Outlet />
      <hr className='border-gray-300 dark:border-yellow-500' />
      <Footer />
    </>
  )
}
