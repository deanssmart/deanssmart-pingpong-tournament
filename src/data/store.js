import { createStore, compose } from 'redux';

import reducer from './reducer';
import initial from './initial';


const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initial,
    composeEnhancers() 
  );
  
export default store;