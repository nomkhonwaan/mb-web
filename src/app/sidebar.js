/**
 * External Dependencies
 */
import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
import { toggleSidebar } from '../redux/modules/app';

export const Sidebar = (props) => {
  const items = [
    { link: '/', name: 'Home' },
    { link: '/login', name: 'Login / Register' },
    { link: '/categories/web-development', name: 'Web Development' },
    { link: '/categories/web-design', name: 'Web Design' },
    { link: '/categories/programming', name: 'Programming' },
    { link: '/categories/devops', name: 'DevOps' },
    { link: '/categories/life-style', name: 'Life Style' },
    { link: '/categories/how-i-made-this-website', name: 'How I made this website' }
  ];

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

      <nav>
        {/* TODO: all nav's items will be actual categories */}
        <ul className="_list-unstyled _unpadding">
          {
            items.map(({ link, name }, key) => (
              <li 
                className={ classnames('nav-item -vertical', {
                  '-selected': props.router.location.pathname === link
                }) }
                key={ key }
                onClick={ props.toggleSidebar }
              >
                <Link to={ link } className="_color-inherit _text-undecorated">
                  <span>{ name }</span>
                </Link>
              </li>
            ))
          }
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
