import React from 'react';
import './styles/globals.css';
import ReactDOM from 'react-dom';
import App from './App';
import UsernameProvider from './providers/UsernameProvider';

ReactDOM.render(
  <React.StrictMode>
    <UsernameProvider>
      <App />
    </UsernameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
