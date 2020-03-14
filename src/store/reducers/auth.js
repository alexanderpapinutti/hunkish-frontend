import _ from 'lodash';

const auth = (auth = { step: 'login' }, { type, payload }) => {
    switch (type) {
        case 'SET_AUTH_STEP':
            return { ...auth, 'step': payload };
        default:
            return auth
    }
}


export default auth;