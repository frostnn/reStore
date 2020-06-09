import React from 'react';
import  withBookstoreService from '../hoc/withBooksstoreService';

const App = ({bookstoreService}) => {
  return <div>App</div>
}

export default withBookstoreService()(App);