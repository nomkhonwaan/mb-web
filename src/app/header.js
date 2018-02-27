/**
 * External Dependencies
 */
import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Internal Dependencies
 */
import { toggleSidebar } from '../redux/modules/app';

export const Header = (props) => {
  return (
    <div className="app-header">
      
      <div
        className="sidebar-toggle"
        onClick={ props.toggleSidebar }
      >
        <i className="fal fa-bars" />
      </div>

      <div className="search-box">
        <i className="fal fa-search" />
      </div>

    </div>
  );
};

Header.propTypes = {
  app: PropTypes.shape({
    sidebar: PropTypes.shape({
      collapsed: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default connect(
  (state, ownProps) => {
    return {
      app: { 
        ...state.app
      },
      ...ownProps
    };
  },
  { toggleSidebar }
)(Header);

