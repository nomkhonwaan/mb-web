/**
 * External Dependencies
 */
import * as React        from 'react';
import { connect }       from 'react-redux';
import PropTypes         from 'prop-types';

/**
 * Internal Dependencies
 */
import { toggleSidebar } from '../redux/modules/app';

export const Header = (props) => {
  return (
    <header className="app-header _flex">
      
      <div
        className="sidebar-toggle _flex _flex-vertical-align-middle "
        onClick={ props.toggleSidebar }
      >
        <i className="fal fa-bars" />
      </div>

      <div className="search-box _flex _flex-vertical-align-middle _flex-right">
        <i className="fal fa-search" />
      </div>

    </header>
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
  (state) => {
    return {
      app: { 
        ...state.app
      }
    };
  },
  { toggleSidebar }
)(Header);

