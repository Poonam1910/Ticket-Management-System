import {combineReducers} from 'redux';
import ticketReducer from './ticketReducers';
import userReducers from './userReducers';
import authReducer from './authReducers';
import authenticateReducers from './authenticateReducers';

export default combineReducers({
    users:userReducers,
    tickets:ticketReducer,
    auth: authReducer,
    authenticate:authenticateReducers
})