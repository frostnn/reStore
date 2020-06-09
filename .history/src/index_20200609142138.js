import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/App';
import ErrorBoundry from './components/errorBoundry/ErrorBoundry';
import {BooksstoreServiceProvider} from './components/bookstoreServiceContext/BooksstoreServiceContext';
import BookstoreService from './services/BookstoreService';

import store from './store';

const bookstoreService = new BookstoreService();
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BooksstoreServiceProvider value = {bookstoreService}>
        <Router>
          <App />
        </Router>
      </BooksstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);


