/**
 * External Dependencies
 */
import * as React       from 'react';
import { connect }      from 'react-redux';
import { renderRoutes } from 'react-router-config';
import classnames       from 'classnames';
import PropTypes        from 'prop-types';

/** 
 * Internal Dependencies
 */
import routes           from '../routes';
import Header           from './header';
import Footer           from './footer';
import Sidebar          from './sidebar';
import PopupOverlay     from './popup-overlay';

export const App = (props) => {
  return (
    <div className={ classnames('app', {
      '-sidebar-expanded': !props.app.sidebar.collapsed
    }) }>

      <Header />
    
      <PopupOverlay isIn={ !props.app.sidebar.collapsed } />

      <Sidebar />

      { renderRoutes(routes) }

      <Footer
        version="2.0.1"
        revision="9fce2b7"
        year="2018"
      />

    </div>
  );
};

App.propTypes = {
  app: PropTypes.shape({
    sidebar: PropTypes.shape({
      collapsed: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired
}

export default connect(
  (state) => {
    return {
      app: state.app
    };
  }
)(App);