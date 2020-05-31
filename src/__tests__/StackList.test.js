import React from 'react';
import { shallow } from 'enzyme';

import { StackList } from '../components/StackList';
import stacks from '../data/stacks.json';

const props = { stacks };

describe('StackList', function () {
    const stackList = shallow(<StackList {...props} />);

    it('should have the right number of links', function () {
        expect(stackList.find('Link').length).toEqual(props.stacks.length);
    });

    it('should render the title correctly', function () {
        expect(stackList.find('Link h4').at(0).text()).toEqual(props.stacks[0].title);
        expect(stackList.find('Link h4').at(1).text()).toEqual(props.stacks[1].title);
    });
});