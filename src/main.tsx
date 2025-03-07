import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import './index.css';
import './i18n';
import App from './app/app';

import './theme/css/fonts.css';

const root: Root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
