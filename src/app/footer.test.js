/**
 * External Dependencies
 */
import * as React  from 'react';
import { shallow } from 'enzyme';

/**
 * Internal Dependencies
 */
import Footer      from './footer';

describe('app-footer', () => {

  it('should display an application\'s footer as expected', () => {
    const wrapper = shallow(<Footer
      version="0.0.1"
      revision="dev"
      year="2018"
    />);

    expect(wrapper.find('img[src="/static/cityscape.svg"]')).toHaveLength(1);
    expect(wrapper.find('img[src="/static/bird-logo.svg"]')).toHaveLength(1);
    expect(wrapper.find('.version-and-revision').text()).toBe('v0.0.1 · dev');
    expect(wrapper.find('.copyright').text()).toBe('www.nomkhonwaan.com © 2018');
      
    const socialNetworkConnection = wrapper.find('.social-network-connection');
    expect(socialNetworkConnection.childAt(0).prop('href')).toBe('https://github.com/nomkhonwaan');
    expect(socialNetworkConnection.childAt(1).prop('href')).toBe('https://medium.com/@nomkhonwaan');
    expect(socialNetworkConnection.childAt(2).prop('href')).toBe('https://www.linkedin.com/in/nomkhonwaan');

    expect(wrapper.find('Header').at(0).prop('children')).toBe('Subscribe');
    expect(wrapper.find('.subscription-form').text()).toBe('Stay up to date with our latest publishing. Your email is safe with us, we don\'t spam.');

    expect(wrapper.find('Header').at(1).prop('children')).toBe('Links');
    const shortcut = wrapper.find('.shortcut');
    expect(shortcut.childAt(0).children().prop('to')).toBe('/rss');
    expect(shortcut.childAt(0).children().prop('children')).toBe('RSS');
    expect(shortcut.childAt(1).children().prop('to')).toBe('/about');
    expect(shortcut.childAt(1).children().prop('children')).toBe('About');
    expect(shortcut.childAt(2).children().prop('href')).toBe('https://api.nomkhonwaan.com');
    expect(shortcut.childAt(2).children().prop('children')).toBe('Graphiql');
    expect(shortcut.childAt(3).children().prop('href')).toBe('https://github.com/nomkhonwaan/myblog/blob/master/CONTRIBUTE.md');
    expect(shortcut.childAt(3).children().prop('children')).toBe('Contribution');
    expect(shortcut.childAt(4).children().prop('to')).toBe('/terms-of-use');
    expect(shortcut.childAt(4).children().prop('children')).toBe('Terms of Use');
  });

});
