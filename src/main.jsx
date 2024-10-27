import React from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

const isProd = process.env.NODE_ENV === 'production';

console.log(isProd);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={isProd ? '/Obiymy-front/' : '/'}>
      <ReactLenis root>
        <App />
      </ReactLenis>
    </BrowserRouter>
  </React.StrictMode>
);
