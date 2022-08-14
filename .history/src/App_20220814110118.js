import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes } from './routes';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <div className="bg-gray-100 dark:bg-gray-900 dark>
        App
      </div>
    </div>
  );
};

export default App;