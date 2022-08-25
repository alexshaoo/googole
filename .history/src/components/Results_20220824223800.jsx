import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../../context/ResultContext';

export const Results = () => {
  const { results, loading, searchTerm, getResults, setSearchTerm } = useResultContext();
  const location = useLocation();

  if (loading) return <Loading />;
  

  return (
    <div>
      Results
    </div>
  )
}