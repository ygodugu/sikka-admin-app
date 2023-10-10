import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/feather.css'
import './assets/css/app-light.css';
import './assets/css/custom-styles.css';
import reportWebVitals from './reportWebVitals';
import { Main } from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
