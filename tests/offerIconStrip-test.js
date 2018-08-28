import React from 'react';
import { shallow, mount } from 'enzyme';
import OfferIconStrip from '../src/client/js/offerIconStrip';

describe('A test suite for OfferIconStrip component', function() {
  it('should render with span before dynamic imports finish', function() {
    const strip = shallow(<OfferIconStrip />),
          loadingSpan = strip.find('span');

    expect(loadingSpan.length).toBe(1);
  });

  it('should async import modules and render fa icon', function() {
    const faIcon = ['fas', 'utensils'],
          strip = mount(<OfferIconStrip icon={faIcon} />);

    return strip.instance().loadModules().then(() => {
      strip.update();
      
      const icon = strip.find('.fa-utensils');
      expect(icon.length).toBe(1);
    });
  });
});