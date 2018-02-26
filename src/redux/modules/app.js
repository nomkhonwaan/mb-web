/**
 * External Dependencies
 */
import update from 'immutability-helper';

const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR
  };
};

const initialState = {
  sidebar: {
    collapsed: true
  }
};

function app(state = initialState, action) {
  switch (action.type) {

    case TOGGLE_SIDEBAR:
      return update(state, {
        sidebar: {
          $toggle: [ 'collapsed' ]
        }
      });

    default:
      return state;
  }
}

export default app;
