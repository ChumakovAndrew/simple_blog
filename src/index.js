import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/App';

import './resources/reset-css.scss'
import './index.scss';



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


