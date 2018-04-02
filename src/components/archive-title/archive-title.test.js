/**
 * External Dependencies
 */
import * as React   from 'react';
import { shallow }  from 'enzyme';

/**
 * Internal Dependencies
 */
import ArchiveTitle from './archive-title';

describe('archive-title', () => {
  it('should render an archive-title correctly', () => {
    const wrapper = shallow(
      <ArchiveTitle>
        Hello, world!
      </ArchiveTitle>
    );

    expect(wrapper.text()).toBe('Hello, world!');
    expect(wrapper.prop('className')).toBe('archive-title');
  });
});
