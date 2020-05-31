import React from 'react';
import { shallow } from 'enzyme';

import { Stack } from '../components/Stack';

import { stack } from '../data/stackMock';

const props = { stack };

describe('Stack', function () {
    const stack = shallow(<Stack {...props} />);

    it('should render the title', function () {
        expect(stack.find('h2').text()).toEqual(props.stack.title);
    });

    it('should render the Link home', function () {
        expect(stack.find('Link h4').text()).toEqual('Home');
    });

    it('should render the correct number of cards', function () {
        expect(stack.find('Card').length).toEqual(3);
    });
});