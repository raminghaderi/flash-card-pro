import * as actions from '../../actions/index';
import * as action_types from '../../constants/action-types';
import stacks from '../../data/stacks.json';
import { stack } from '../../data/stackMock';

describe('actions', function () {
    it('should create an action to set the main stack', function () {
        const expectedAction = { type: action_types.SET_STACK, payload: stack };

        expect(actions.setStack(stack)).toEqual(expectedAction);
    });

    it('should create an action to load stacks', function () {
        const expectedAction = { type: action_types.LOAD_STACKS, payload: stacks };

        expect(actions.loadStacks(stacks)).toEqual(expectedAction);
    });

    it('should create an action to add stack', function () {
        const expectedAction = { type: action_types.ADD_STACK, payload: stack };

        expect(actions.addStack(stack)).toEqual(expectedAction);
    });
});
