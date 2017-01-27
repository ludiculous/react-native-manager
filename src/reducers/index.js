import {combineReducers} from 'redux';
import Auth from './AuthReducer.js';
import EmployeeForm from './EmployeeFormReducer.js';
import Employees from './EmployeeReducer.js';



export default combineReducers({
    Auth,
    EmployeeForm,
    Employees
});