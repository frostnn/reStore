import React from 'react';
import { withBookstoreService} from '../hoc/withBooksstoreService';

const App = ({withBookStoreService}) => {
  return <div>App</div>
}

export default withBookstoreService()(App);