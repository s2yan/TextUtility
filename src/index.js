import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const myElement = (
  <div>
    <App />
  </div>
)

const root = createRoot(document.getElementById('root'));
root.render(myElement);