/**
 * External Dependencies
 */
import * as React from 'react';
import PropTypes  from 'prop-types';
import { Link }   from 'react-router-dom';

/**
 * Internal Dependencies
 */
import { Header } from '../components';

const Footer = (props) => {
  return (
    <div className="app-footer">

      <div className="_flex _flex-horizontal-align-right">
        <img alt="" src="/static/cityscape.svg" />
      </div>

      <div className="_flex _flex-horizontal-align-center">
        <div className="_flex _wide">

          <div>
            <div className="bird-logo">
              <img alt="nomkhonwaan.com" src="/static/bird-logo.svg" />
            </div>

            <div className="version-and-revision">v{ props.version } · { props.revision }</div>

            <div className="copyright">www.nomkhonwaan.com &copy; { props.year }</div>

            <div className="social-network-connection">
              <a href="https://github.com/nomkhonwaan" className="_text-undecorated _color-inherit">
                <i className="fab fa-github-square" />
              </a>
              <a href="https://medium.com/@nomkhonwaan" className="_text-undecorated _color-inherit">
                <i className="fab fa-medium" />
              </a>
              <a href="https://www.linkedin.com/in/nomkhonwaan" className="_text-undecorated _color-inherit">
                <i className="fab fa-linkedin" />
              </a>
            </div>

          </div>

          <div>
            <Header displayStyle="footer">
              Subscribe
            </Header>

            <form className="subscription-form">
              <div>Stay up to date with our latest publishing. Your email is safe with us, we don't spam.</div>
            </form>
          </div>

          <div>
            <Header displayStyle="footer">
              Links
            </Header>

            <ul className="shortcut _list-unstyled _unpadding">
              <li>
                <Link to="/rss" className="_text-undecorated _color-inherit">RSS</Link>
              </li>
              <li>
                <Link to="/about" className="_text-undecorated _color-inherit">About</Link>
              </li>
              <li>
                <a href="https://api.nomkhonwaan.com" className="_text-undecorated _color-inherit">
                  Graphiql
                </a>
              </li>
              <li>
                <a href="https://github.com/nomkhonwaan/myblog/blob/master/CONTRIBUTE.md" className="_text-undecorated _color-inherit">
                  Contribution
                </a>
              </li>
              <li>
                <Link to="/terms-of-use" className="_text-undecorated _color-inherit">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

Footer.propTypes = {
  version: PropTypes.string.isRequired,
  revision: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}

export default Footer;
