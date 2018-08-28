import React from 'react';
import { shallow, mount } from 'enzyme';
import HeaderStrip from '../src/client/js/header';
import Auth from '../src/client/js/auth';
jest.mock('../src/client/js/auth');

describe('A test suite for HeaderStrip component', function() {
    beforeEach(() => {
        Auth.mockReset();
        Auth.mockImplementationOnce(() => {
            return {
                isAuthenticated: () => false,
                userProfile: undefined
            }
        });
    });

    it('should render with correct class name and children', function (){
        const auth = new Auth(),
            strip = shallow(<HeaderStrip auth={auth} />),
            expectedClassName = 'header-strip',
            childrenCount = 2;

        expect(strip.hasClass(expectedClassName)).toBe(true);
        expect(strip.children().length).toBe(childrenCount);
    });

    it('should render with logo', function() {
        const auth = new Auth(),
            strip = mount(<HeaderStrip auth={auth} />),
            logo = strip.find('.title');

        expect(logo.length).toBe(1);
    });

    it('should render with sign in button when user is logged out', function() {
        const auth = new Auth(),
            strip = mount(<HeaderStrip auth={auth} />),
            button = strip.find('.btn-sign-in'),
            buttonText = 'Sign in';

        expect(button.length).toBe(1);
        expect(button.text()).toBe(buttonText);
    });

    it('should show username when user is logged in', function() {
        Auth.mockReset();
        Auth.mockImplementationOnce(() => {
            return {
                isAuthenticated: () => true,
                userProfile: {
                    nickname: 'test-user1'
                }
            }
        });

        const auth = new Auth(),
            strip = mount(<HeaderStrip auth={auth} />),
            nickname = strip.find('.user-nickname');
        
        expect(nickname.length).toBe(1);
        expect(nickname.text()).toBe('test-user1');
    });
});