import React from 'react';
import { Helmet } from 'react-helmet';

export default function Page({ children, title }) {
  return (
    <>
      <Helmet >
        <title>{title}</title>
      </Helmet>

      {
        children
      }
    </>
  )
}
