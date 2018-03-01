/**
 * External Dependencies
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
import { toggleSidebar } from '../redux/modules/app';

export const PopupOverlay = (props) => {
  const timeout = 400;

  return (
    <Transition
      in={ props.isIn }
      mountOnEnter
      unmountOnExit
      timeout={ timeout }
    >
      { 
        (status) => (
          <div 
            className={ classnames('popup-overlay', {
              [`-${status}`]:true
            }) }
            onClick={ props.toggleSidebar }
          />
        )
      }
    </Transition>
  );
};

PopupOverlay.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
};

export default connect(
  null,
  { toggleSidebar }
)(PopupOverlay);