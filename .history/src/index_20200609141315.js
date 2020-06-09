import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/App';
import ErrorBoundry from './components/errorBoundry/ErrorBoundry';
import {BookstoreServiceProvider} from './components/bookstoreServiceContext/BooksstoreServiceContext';
import BookstoreService from './services/BookstoreService';

import store from './store';

const bookstoreServise = new BookstoreService();
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value = {bookstoreServise}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);


