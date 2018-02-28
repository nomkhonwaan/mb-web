/**
 * External Dependencies
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

/**
 * Internal Dependencies
 */
import { Sidebar } from './sidebar';

describe('app-sidebar', () => {

  describe('sidebar-toggle', () => {
    describe('When user click on the sidebar-toggle button', () => {
      it('should call `toggleSidebar` function', () => {
        const toggleSidebar = spy();
        const wrapper = shallow(
          <Sidebar 
            router={ { location: { pathname: '/' } } }
            toggleSidebar={ toggleSidebar }
          />
        );

        wrapper.find('.sidebar-toggle').simulate('click');

        expect(toggleSidebar.calledOnce).toBe(true);
      });
    });
  });

});
