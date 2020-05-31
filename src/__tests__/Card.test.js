import React from 'react';
import { shallow } from 'enzyme';

import Card from '../components/Card';
import { card } from '../data/cardMock';

const props = { card };

describe('Card', function () {
    const card = shallow(<Card {...props} />);

    it('should have the prompt from the props', function () {
        expect(card.find('h4').at(0).text()).toEqual(props.card.prompt);
    });

    it('should have the answer from the props', function () {
        expect(card.find('h4').at(1).text()).toEqual(props.card.answer);
    });

    it('should change the answer element class on card click', function () {
        expect(card.find('div.card div').at(1).hasClass('hide-answer')).toBe(true);

        card.simulate('click');

        expect(card.find('div.card div').at(1).hasClass('reveal-answer')).toBe(true);
    });
});