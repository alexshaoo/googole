import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Loading } from './Loading';

import { useResults } from '../contexts/ResultContext';

export const Results = () => {
  const { results, loading, searchTerm, getResults, setSearchTerm } = useResults();
  const location = useLocation();

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return "SEARCH RESULTS"
    case "/images":
      return "SEARCH RESULTS"
    case "/news":
      return "SEARCH RESULTS"
    case "/":
      return "SEARCH RESULTS"
    default:
      return "WTF"
  }
}