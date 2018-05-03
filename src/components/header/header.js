/**
 * External Dependencies
 */
import * as React from 'react';
import classnames from 'classnames';
import PropTypes  from 'prop-types';

const Header = (props) => {
  return (
    <div
      className={ classnames('header', {
        [`-${props.displayStyle}`]: true
      }) }
    >
      { props.children }
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  displayStyle: PropTypes.oneOf([ 'category', 'footer' ]),
};

export default Header;
