/**
 * External Dependencies
 */
import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

/** 
 * Internal Dependencies
 */
import app from './modules/app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(history) {
  const store = createStore(
    combineReducers({
      app,
      router: routerReducer
    }),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  );

  return store;
}

export default configureStore;
