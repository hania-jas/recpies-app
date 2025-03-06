import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './app/app';

import './theme/css/fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
