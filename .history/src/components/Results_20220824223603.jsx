import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../../context/ResultContext';

export const Results = () => {
  const { results, loading, getResults } = useResultContext();
  return (
    <div>
      Results
    </div>
  )
}