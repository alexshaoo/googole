import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const Links = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/search" />} />
        <Route epath={['/search', '/images', '/news', '/videos']} element={<Results />} />
      </Routes>
    </div>
  );
}