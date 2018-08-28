import React from 'react';
import { mount } from 'enzyme';
import Feed from '../src/client/js/feed';
jest.mock('../src/client/js/feedQuery');
import GetOffers from '../src/client/js/feedQuery';

describe('A test suite for Feed component', function (){
    it('should render loading placeholders when there is no state.offers', function (){
        const feed = mount(<Feed />),
            offers = feed.find('.offer');

        expect(offers.length).toBe(7);
        offers.map((item) => {
            expect(item.text()).toBe('Loading... ');
        });
    });

    it('should render offers after querying offers', () => {
        const mockOffers = [
            {Id: "1", Title: "Lunch Bento deal", Owner: "Yamamori Sushi", FaIcon: ["fas", "utensils"]},
            {Id: "2", Title: "Juices: 2 for €5.50", Owner: "Marks and Spencer", FaIcon: ["fas", "shopping-cart"]},         
            {Id: "3", Title: "20% Summer sale", Owner: "Superdry", FaIcon: ["fas", "tshirt"]}
        ];

        GetOffers.mockReset();
        GetOffers.mockImplementation(() => new Promise(resolve => resolve(mockOffers)));

        const feed = mount(<Feed />);

        return feed.instance().loadOffers().then(
            () => {
                feed.update();

                const offers = feed.find('.offer');
                offers.map((item) => {
                    expect(item.text()).not.toBe('Loading... ');
                });
            }
        );
    });
});