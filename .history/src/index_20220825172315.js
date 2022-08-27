import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';
import { ResultProvider } from './contexts/ResultContext';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <ResultProvider>
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
  <ResultProvider></ResultProvider>
);