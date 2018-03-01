/**
 * External Dependencies
 */
import * as React from 'react';
import { shallow } from 'enzyme';

/**
 * Internal Dependencies
 */
import { App } from './app';

describe('app', () => {

  describe('sidebar-toggle', () => {
    describe('When the Sidebar is expanded', () => {
      it('should add class `-sidebar-expanded` to the component', () => {
        const wrapper = shallow(
          <App
            app={ { sidebar: { collapsed: false } } }
          />
        );

        expect(wrapper.find('.-sidebar-expanded')).toHaveLength(1);
        expect(wrapper.find({ isIn: true })).toHaveLength(1);
      });
    });
    
    describe('When the Sidebar is collasped', () => {
      it('should remove class `-sidebar-expanded` from the component', () => {
        const wrapper = shallow(
          <App
          app={ { sidebar: { collapsed: true } } }
          />
        );
        
        expect(wrapper.find('.-sidebar-expanded')).toHaveLength(0);
        expect(wrapper.find({ isIn: false })).toHaveLength(1);
      });
    });
  });

});
