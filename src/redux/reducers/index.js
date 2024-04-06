import { combineReducers } from 'redux';
import organizations  from './organizationReducer';
import employees from './employeeReducer';

const rootReducer = combineReducers({
    organizations,employees
});

export default rootReducer;