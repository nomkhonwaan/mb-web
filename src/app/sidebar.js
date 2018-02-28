/**
 * External Dependencies
 */
import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import { toggleSidebar } from '../redux/modules/app';

const Sidebar = (props) => {
  return (
    <div className="app-sidebar">

      <div className="header _flex">
        
        <div 
          className="sidebar-toggle -small _flex _flex-vertical-align-middle _flex-right _uppercase"
          onClick={ props.toggleSidebar }
        >
          <span className="close">Close</span>
          <i className="fal fa-times" />
        </div>

      </div>

      <nav className="nav">
        {/* TODO: loop through all nav's items instead of hard coding */}
        <ul className="_list-unstyled _unpadding">
          <li className="item">
            <Link to="/" className="_text-undecorated">
              <span>Home</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/login" className="_text-undecorated">
              <span>Login / Register</span>
            </Link> 
          </li>
          {/* TODO: replace this item with actual category */}
          <li className="item">
            <Link to="/categories/web-development" className="_text-undecorated">
              <span>Web Development</span>
            </Link>
          </li>
          {/* TODO: replace this item with actual category */}
          <li className="item">
            <Link to="/categories/web-design" className="_text-undecorated">
              <span>Web Design</span>
            </Link>
          </li>
          {/* TODO: replace this item with actual category */}
          <li className="item">
            <Link to="/categories/programming" className="_text-undecorated">
              <span>Programming</span>
            </Link>
          </li>
          {/* TODO: replace this item with actual category */}
          <li className="item">
            <Link to="/categories/devops" className="_text-undecorated">
              <span>DevOps</span>
            </Link>
          </li>
          {/* TODO: replace this item with actual category */}
          <li className="item">
            <Link to="/categories/life-style" className="_text-undecorated">
              <span>Life Style</span>
            </Link>
          </li>
          {/* TODO: replace this item with actual category */}
          <li className="item">
            <Link to="/categories/how-i-made-this-website" className="_text-undecorated">
              <span>How I made this website</span>
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
};

Sidebar.propTypes = {
  router: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default connect(
  (state, ownProps) => {
    return {
      router: state.router,
      ...ownProps
    };
  },
  { toggleSidebar }
)(Sidebar);
