import _ from 'lodash';

export function getUser(state) {
    return _.get(state, 'user');
}

export function getToken(state) {
    return _.get(state, 'token');
}