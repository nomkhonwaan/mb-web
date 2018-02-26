/**
 * External Dependencies
 */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import './style.css';
import App from './app';
import configureStore from './redux/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
  
    <Provider store={ store }>
      <App />
    </Provider>

  </BrowserRouter>, 
  document.getElementById('root')
);

registerServiceWorker();
