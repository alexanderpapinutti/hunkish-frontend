import _ from 'lodash';

export function getUser(state) {
    return _.get(state, 'userInfo');
}

export function getAuthentificationStep(state) {
    console.log(state)
    return _.get(state, 'auth.step');
}