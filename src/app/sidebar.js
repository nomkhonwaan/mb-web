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

const Sidebar = () => {
  return (
    <div className="app-sidebar">
    </div>
  );
};

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
};

export default connect(
  (state, ownProps) => {
    return {
      ...state.app,
      ...ownProps
    };
  },
  { toggleSidebar }
)(Sidebar);
