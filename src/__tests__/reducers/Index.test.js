import rootReducer from '../../reducers/index';
import * as action_types from '../../constants/action-types';
import stacks from '../../data/stacks.json';
import { stack } from '../../data/stackMock';

describe('root reducer', function () {
    it('should return the initial state', function () {
        expect(rootReducer({}, {})).toEqual({ stack: {}, stacks: [] });
    });

    it('should set the main stack', function () {
        expect(rootReducer({}, { type: action_types.SET_STACK, payload: stack })).toEqual({ stack: stack, stacks: [] });
    });

    it('should load stacks', function () {
        expect(rootReducer({}, { type: action_types.LOAD_STACKS, payload: stacks })).toEqual({
            stack: {},
            stacks: stacks
        });
    });

    it('should add stack', function () {
        expect(rootReducer({}, { type: action_types.ADD_STACK, payload: stack })).toEqual({
            stack: {},
            stacks: [stack]
        });
    });
});