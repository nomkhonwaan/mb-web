/**
 * External Dependencies
 */
import { compose, createStore } from 'redux';

/** 
 * Internal Dependencies
 */
import { rootReducer } from './modules/root';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers()
  );

  return store;
}

export default configureStore;
