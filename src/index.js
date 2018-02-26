/**
 * External Dependencies
 */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

/**
 * Internal Dependencies
 */
import './style.css';
import App from './app';
import configureStore from './redux/configureStore';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

const store = configureStore(history);

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
