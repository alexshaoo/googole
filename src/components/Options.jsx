import React from 'react';
import { NavLink } from 'react-router-dom';

const options = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/image', text: '📸 Images' },
  { url: '/video', text: '📺 Videos' },
];

export const Options = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {options.map(({ url, text }, index) => (  
        <NavLink to={url} className="m-2" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
          {text}
        </NavLink>
      ))}
    </div>
  );
}