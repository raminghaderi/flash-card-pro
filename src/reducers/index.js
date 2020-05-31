import { ADD_STACK, LOAD_STACKS, SET_STACK } from '../constants/action-types';
import { combineReducers } from 'redux';

function stack(state = {}, { type, payload }) {
    switch (type) {
    case SET_STACK:
        return payload;
    default:
        return state;
    }
}

function stacks(state = [], { type, payload }) {
    switch (type) {
    case LOAD_STACKS:
        return payload;
    case ADD_STACK:
        return [...state, {...payload, id: state.length}];
    default:
        return state;
    }
}

export default combineReducers({ stack, stacks });
