import userInfo from './userInfo';
import auth from './auth';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    userInfo,
    auth
})

export default reducers;

