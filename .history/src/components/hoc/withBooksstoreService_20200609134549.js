import React from 'react';
import {BookstoreServiceConsumer} from '../bookstoreServiceContext/BooksstoreServiceContext';

const withBookstoreService = () = (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
      {
        (bookstoreService) => {
          <Wrapped {...props } bookstoreService={bookstoreService} />
        }
      }
      </BookstoreServiceConsumer>
    );
  }
};
export default withBookstoreService;