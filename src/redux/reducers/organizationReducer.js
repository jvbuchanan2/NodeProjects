import * as types from '../actions/actionTypes';

export default function organizationReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_ORGANIZATION:
            return [...state, { ...action.organization}];
        default:
            return state;
    }
}