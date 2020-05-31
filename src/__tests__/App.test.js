import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
    const app = shallow(<App/>);

    it('should render title correctly', function() {
        expect(app.find('h2').text()).toEqual('Flashcard Pro');
    });

    it('should render the StackList', function () {
        expect(app.find('Connect(StackList)').exists()).toBe(true);
    });

    it('should render link to create new stack', function () {
        expect(app.find('Link h4').text()).toEqual('Create a New Stack');
    });
});