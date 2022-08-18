import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const Links = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="search" element={<Results />} />
        
        {/* <Route path={['/search', '/images', '/news', '/videos']} element={<Results />} /> */}
      </Routes>
    </div>
  );
}