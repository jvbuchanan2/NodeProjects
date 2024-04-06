import * as types from '../actions/actionTypes';

export default function employeeReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_EMPLOYEE:
            return [...state, { ...action.employee}];
        default:
            return state;
    }
}