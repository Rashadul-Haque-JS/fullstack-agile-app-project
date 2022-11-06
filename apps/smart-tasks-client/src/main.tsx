import React from 'react';
import {store} from './app/store';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';
import './styles.scss';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
