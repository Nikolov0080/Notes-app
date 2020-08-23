import React from 'react';
import ReactDOM from 'react-dom';
import PageRouter from './PageRouter';
import AuthCheck from './Auth_Check';

ReactDOM.render(
  <React.StrictMode>
    <AuthCheck>
      <PageRouter />
    </AuthCheck>
  </React.StrictMode>,
  document.getElementById('root')
);