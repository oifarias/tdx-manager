import React from 'react';
import ReactDOM from 'react-dom';
import SreensRoutes from './screens/routes'
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  (
    <>
        <BrowserRouter>
           <SreensRoutes/>
        </BrowserRouter>
    </>
  ),
  document.getElementById('root')
);