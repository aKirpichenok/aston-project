import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/css/main.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import { AuthProvider } from './store/authContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <Provider store={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
    </AuthProvider>
  </React.StrictMode>
  ,document.getElementById('root')
);
