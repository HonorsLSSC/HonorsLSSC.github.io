import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
    <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/c57a3033-d9e3-4d95-a66f-f802233773da/webchat/config.js" defer></script>
      <script src="https://kit.fontawesome.com/208aceaa1a.js" crossorigin="anonymous"></script>
    </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
