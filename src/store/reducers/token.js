const token = (token = {}, { type, payload }) => {
    switch (type) {
        case 'SET_TOKEN':
            return payload
        default:
            return token
    }
}


export default token;