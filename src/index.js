import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/css/main.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import { ErrorBoundary } from './components/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
      <ErrorBoundary>
    <Provider store={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
      </Provider>
      </ErrorBoundary>
  </React.StrictMode>
  ,document.getElementById('root')
);
