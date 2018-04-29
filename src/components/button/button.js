/**
 * External Dependencies
 */
import * as React from 'react';
import PropTypes  from 'prop-types';
import classnames from 'classnames';
import { omit }   from 'lodash';

const Button = (props) => {
  return (
    <button
      { ...omit(props, 'className') }
      className={ classnames('button', props.className) }
    >
      { props.children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
