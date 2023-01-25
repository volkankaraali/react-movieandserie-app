// libraries
import React from 'react';
import { Routes as RRDRoutes, Route } from 'react-router-dom';

// components
import Layout from '../components/Layout';

// pages
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import ComingSoon from '../pages/ComingSoon';
import Series from '../pages/Series';

export default function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>

        <Route path='movies'>
          <Route index element={<Movies />} />
          <Route path='top250' element={<div>250</div>} />
          <Route path='most-popular' element={<div>popular</div>} />
        </Route>

        <Route path='series'>
          <Route index element={<Series />} />
          <Route path='top250' element={<div>250</div>} />
          <Route path='most-popular' element={<div>popular</div>} />
        </Route>

        <Route path='coming-soon' element={<ComingSoon />} />

        <Route path='detail/:slug' element={<div>detail</div>} />
      </Route>
    </RRDRoutes>
  )
}
