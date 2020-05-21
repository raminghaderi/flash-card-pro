import { SET_STACK, LOAD_STACKS, ADD_STACK } from '../constants/action-types';

export function setStack(stack) {
    return {
        type: SET_STACK,
        payload: stack
    };
}

export function loadStacks(stacks) {
    return {
        type: LOAD_STACKS,
        payload: stacks
    };
}

export function addStack(stack) {
    return {
        type: ADD_STACK,
        payload: stack
    }
}
