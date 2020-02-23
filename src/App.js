import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';

import store from './store';

import Routes from './routes';

export default () => 
  <Provider store={store}>
    <Header />
    <Routes />
    <Footer />
  </Provider>
