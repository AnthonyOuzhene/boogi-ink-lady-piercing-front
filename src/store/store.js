import { createStore } from 'redux';

import reducer from '../reducers/reducers';

// on construit un enhancer avec à la fois dev tool et les middlewares


const store = createStore(
  // reducer
  reducer,
);

export default store;
