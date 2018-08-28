import React from 'react';
import { shallow, mount } from 'enzyme';
import Loading from '../src/client/js/loading';

describe('A test suite for Loading component', function() {
  it('should render with correct text', function() {
    const loading = shallow(<Loading />),
          actual = loading.text().replace(/ /g, ''),
          expected = 'Loading...';

    expect(actual).toBe(expected);
  });

  it('should async import modules and render fa icon', function() {
    const loading = mount(<Loading />);

    return loading.instance().loadModules().then(() => {
      loading.update();
      
      const icon = loading.find('.fa-circle-notch');
      expect(icon.length).toBe(1);
    });
  });

  it('should have correct styles when there is isFullPage prop', function() {
    const loading = shallow(<Loading isFullPage={true} />);

    expect(loading.hasClass('loading-page')).toBe(true);
  });
});