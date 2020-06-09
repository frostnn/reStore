import React from 'react';
import  withBookstoreService from '../hoc/withBooksstoreService';
import { Router } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import CartPage from '../pages/Cartpage';

const App = ({bookstoreService}) => {
  return (
    <div>
      <h1>App</h1>
      <Router  extend component={HomePage}/>
      <Router component={CartPage}/>
    </div>
    )
}

export default withBookstoreService()(App);