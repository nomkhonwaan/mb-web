/**
 * External Dependencies
 */
import * as React       from 'react';
import { shallow }      from 'enzyme';
import { spy }          from 'sinon';

/**
 * Internal Dependencies
 */
import { PopupOverlay } from './popup-overlay';

describe('popup-overlay', () => {

  describe('when the user click on the popup-overlay area', () => {
    it('should call `toggleSidebar` function', () => {
      const toggleSidebar = spy();
      const wrapper0 = shallow(
        <PopupOverlay
          isIn={ true }
          toggleSidebar={ toggleSidebar }
        />
      );
      const wrapper1 = shallow(
        wrapper0.prop('children')()
      );

      wrapper1.find('.popup-overlay').simulate('click');
      
      expect(toggleSidebar.calledOnce).toBe(true);
    });
  });

});
