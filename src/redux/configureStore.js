/**
 * External Dependencies
 */
import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware }                      from 'react-router-redux';
import { createEpicMiddleware }                  from 'redux-observable';

/** 
 * Internal Dependencies
 */
import { rootEpic, rootReducer }                 from './modules/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

function configureStore(history) {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        epicMiddleware,
        routerMiddleware(history)
      )
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
}

export default configureStore;
