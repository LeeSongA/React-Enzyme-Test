import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const wrapper = mount(<Profile username="velopert" name="Song" />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders username add name', () => {
        const wrapper = mount(<Profile username="velopert" name="Song" />);
        expect(wrapper.props().username).toBe('velopert');
        expect(wrapper.props().name).toBe('Song');

        const boldElement = wrapper.find('b');
        expect(boldElement.contains('velopert')).toBe(true);
        const spanElement = wrapper.find('span');
        expect(spanElement.text()).toBe('(Song)');
    });
});