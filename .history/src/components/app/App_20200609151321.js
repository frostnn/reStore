import React from 'react';
import  withBookstoreService from '../hoc/withBooksstoreService';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import CartPage from '../pages/Cartpage';

const App = ({bookstoreService}) => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/Cart" component={CartPage}/>
    </Switch>
    )
}

export default withBookstoreService()(App);