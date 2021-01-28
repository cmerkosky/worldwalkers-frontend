import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './store/store';
import { defaultState } from './store/reducer';

export const reduxStore = configureStore(defaultState);

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
