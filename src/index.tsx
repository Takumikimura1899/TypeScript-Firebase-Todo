import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Route, BrowserRouter } from 'react-router-dom';
import Login from './login/Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
