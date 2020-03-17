import user from './user';
import token from './token';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    user,
    token
})

export default reducers;

