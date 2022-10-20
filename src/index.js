import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myName = "Olga";

root.render(
  <React.StrictMode>
    <App name={myName} />
  </React.StrictMode>,

  document.getElementById("root")
);



