import React from 'react';
import { shallow } from 'enzyme';

import { StackForm } from '../components/StackForm';

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';

describe('StackForm', function () {
    const stackForm = shallow(<StackForm/>);

    it('should render the Home link correctly', function () {
        expect(stackForm.find('Link h4').text()).toEqual('Home');
    });

    it('should have the right title', function () {
        expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
    });

    it('should render a Form component', function () {
        expect(stackForm.find('Form').exists()).toBe(true);
    });

    it('should render submit button correctly', function () {
        expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
    });

    it('should render submit save correctly', function () {
        expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add the Stack');
    });

    it('should render the form Title correctly onChange event', function () {
        stackForm.find('FormControl').simulate('change', { target: { value: changeTitle } });

        expect(stackForm.state().title).toEqual(changeTitle);
    });

    it('should add a new card to state on Add Card button', function () {
        stackForm.find('Button').at(0).simulate('click');

        expect(stackForm.state().cards.length).toEqual(1);
    });

    it('should have the correct label on the first card input ', function () {
        expect(stackForm.find('FormLabel').at(1).props().children).toEqual('Prompt:');
    });

    it('should have the correct label on the first card input ', function () {
        expect(stackForm.find('FormLabel').at(2).props().children).toEqual('Answer:');
    });

    it('should change the state on prompt value change', function () {
        stackForm.find('FormControl').at(1).simulate('change', { target: { value: changePrompt } });

        expect(stackForm.state().cards[0].prompt).toEqual(changePrompt);
    });

    it('should change the state on answer value change', function () {
        stackForm.find('FormControl').at(2).simulate('change', { target: { value: changeAnswer } });

        expect(stackForm.state().cards[0].answer).toEqual(changeAnswer);
    });
});
