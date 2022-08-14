import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes } from './routes';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme} ? "">
      <h1>Hello World</h1>
    </div>
  );
};

export default App;