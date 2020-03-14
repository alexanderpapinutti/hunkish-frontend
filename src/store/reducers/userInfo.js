import _ from 'lodash';

const userInfo = (userInfo = {}, { type, payload }) => {
    switch (type) {
        case 'SET_USERNAME':
            return { ...userInfo, 'username': payload }
        case 'SET_PASSWORD':
            return { ...userInfo, 'password': payload }
        case 'SET_EMAIL':
            return { ...userInfo, 'email': payload }
        case 'SET_FIRST_NAME':
            return { ...userInfo, 'firstName': payload }
        case 'SET_LAST_NAME':
            return { ...userInfo, 'lastName': payload }
        default:
            return userInfo
    }
}


export default userInfo;