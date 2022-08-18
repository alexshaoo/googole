import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const Links = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/">
          <Navigate to="/search" />
        </Route>
        <Route path={['/search', '/images', '/news', '/videos']}>
          <Results />
        </Route>
      </Routes>
    </div>
  );
}