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
import Detail from '../pages/Detail';

export default function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>

        <Route path='movies'>
          <Route index element={<Movies />} />
        </Route>

        <Route path='series'>
          <Route index element={<Series />} />
        </Route>

        <Route path='coming-soon' element={<ComingSoon />} />

        <Route path='detail/:slug' element={<Detail />} />

        <Route path='*' element={<div>no found.</div>} />
      </Route>
    </RRDRoutes>
  )
}
