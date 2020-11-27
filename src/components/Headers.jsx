import React from 'react';
import { Helmet } from "react-helmet";

export default function Headers({ children: meta, title }) {
  return (
    <Helmet>
      <title>Market Now - { title }</title>
      { meta }
    </Helmet>
  )
}
