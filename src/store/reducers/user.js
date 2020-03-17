const user = (User = {}, { type, payload }) => {
    switch (type) {
        case 'SET_USERNAME':
            return { ...User, 'username': payload }
        case 'SET_PASSWORD':
            return { ...User, 'password': payload }
        case 'SET_EMAIL':
            return { ...User, 'email': payload }
        case 'SET_FIRST_NAME':
            return { ...User, 'firstName': payload }
        case 'SET_LAST_NAME':
            return { ...User, 'lastName': payload }
        case 'RESET_USER':
            return User
        default:
            return User
    }
}


export default user;