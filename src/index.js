import React from 'react';
import ReactDOM from 'react-dom';
import PageRouter from './PageRouter';
import AuthCheck from './Auth_Check';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthCheck>
      <PageRouter />
    </AuthCheck>
  </React.StrictMode>,
  document.getElementById('root')
);