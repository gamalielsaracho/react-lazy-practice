import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Loading from './Loading'
const App = lazy(() => import('./App'))

ReactDOM.render(
  <Suspense fallback={<Loading/>}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'));
