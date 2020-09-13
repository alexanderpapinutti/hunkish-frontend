import user from './user';
import token from './token';
import notifications from './notifications';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    user,
    token,
    notifications
})

export default reducers;

