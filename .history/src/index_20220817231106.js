import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
ReactDOMClient.createRoot(/*...*/);
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);