import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Loading } from './Loading';

import { useResultContext } from '../context/ResultContext';

export const Results = () => {
  const { results, loading, searchTerm, getResults, setSearchTerm } = useResultContext();
  const location = useLocation();

  loading = true;

  if (loading) return <Loading />;

  console.log(location.pathname);

  switch (location.pathname) {
    case "/":
      return "RESULTS" 
    case "/search":
      return "SEARCH RESULTS"
    default:
      return "WTF"
  }
}