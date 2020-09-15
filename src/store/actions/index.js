export function setUser(propName, payload) {
    console.log(11111)
    switch (propName) {
        case 'username':
            return { type: 'SET_USERNAME', payload }
        case 'password':
            return { type: 'SET_PASSWORD', payload }
        case 'email':
            return { type: 'SET_EMAIL', payload }
        case 'firstName':
            return { type: 'SET_FIRST_NAME', payload }
        case 'lastName':
            return { type: 'SET_LAST_NAME', payload }
        default:
            return console.log(`${propName} does not exist`);
    }
}

export function showNotification(notificationType, content) {
    return { type: 'SHOW_NOTIFICATION', notificationType, content }
}

export function hideNotification() {
    return { type: 'HIDE_NOTIFICAITON' }
}

export function resetUser() {
    return { type: 'RESET_USER' }
}

export function setToken(payload) {
    return { type: 'SET_TOKEN', payload }
}