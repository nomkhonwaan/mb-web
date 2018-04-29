/**
 * External Dependencies
 */
import * as React        from 'react';
import { connect }       from 'react-redux';
import PropTypes         from 'prop-types';
import { Link }          from 'react-router-dom';
import classnames        from 'classnames';

/**
 * Internal Dependencies
 */
import { toggleSidebar } from '../redux/modules/app';

export const Sidebar = (props) => {
  const items = [
    { link: '/', name: 'Home' },
    { link: '/login', name: 'Login / Register' },
    { link: '/categories/web-development-5a9a00976bcc2335131f9ca6', name: 'Web Development' },
    { link: '/categories/web-design-5a9a00cb6bcc2335131f9ca7', name: 'Web Design' },
    { link: '/categories/programming-5a9a00f46bcc2335131f9ca8', name: 'Programming' },
    { link: '/categories/devops-5a9a010b6bcc2335131f9ca9', name: 'DevOps' },
    { link: '/categories/life-style-5a9a01156bcc2335131f9caa', name: 'Life Style' },
    { link: '/categories/how-i-made-this-website-5a9a01226bcc2335131f9cab', name: 'How I made this website' }
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
        <ul className="_list-unstyled _unpadding _unmargin">
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
                  { name }
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
