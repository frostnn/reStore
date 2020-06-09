import React from 'react';
import { withBookStoreService} from '../hoc/withBooksstoreService';

const App = ({withBookStoreService}) => {
  return <div>App</div>
}

export default withBookStoreService()(App);