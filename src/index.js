import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './css/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="dPaginaBase">
      <App />
    </div>
  </React.StrictMode>
);