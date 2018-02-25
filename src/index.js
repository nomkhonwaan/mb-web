/**
 * External Dependencies
 */
import * as React from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal Dependencies
 */
import './style.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
