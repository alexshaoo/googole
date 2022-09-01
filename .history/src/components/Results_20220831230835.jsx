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
      
    case "/images":
      return "IMAGE RESULTS"
    case "/news":
      return "NEWS RESULTS"
    case "/videos":
      return "VIDEO RESULTS"
    default:
      return "THE WEB PAGE YOU ARE LOOKING FOR DOES NOT EXIST"
  }
}