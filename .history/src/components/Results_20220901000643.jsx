import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Loading } from './Loading';

import { useResults } from '../contexts/ResultContext';

export const Results = () => {
  const { results, loading, searchTerm, getResults, setSearchTerm } = useResults();
  const location = useLocation();

  // useEffect(() => {
  //   if (location.search) {
  //     const search = location.search.split('=')[1];
  //     setSearchTerm(search);
  //     getResults(search);
  //   }
  // } , [location]);

  useEffect(() => {
    getResults('/search/q=cats');
  } , []);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap">
          {results.map(result => (
            <div className="w-1/2 md:w-1/3 p-2" key={result.id}>
              <ReactPlayer
                url={result.url}
                width="100%"
                height="100%"
                controls
                light={true}
                playing={false}
                config=
        </div>
      )
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