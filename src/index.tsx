import './theme/index.css';
import 'antd/dist/antd.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './app/store';
import GlobalStyle from './theme/globalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Provider store={ store }>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
