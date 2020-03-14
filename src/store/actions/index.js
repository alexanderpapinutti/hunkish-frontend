export function setUsername(payload) {
    return { type: 'SET_USERNAME', payload };
};

export function setPassword(payload) {
    return { type: 'SET_PASSWORD', payload };
};

export function setEmail(payload) {
    return { type: 'SET_EMAIL', payload };
};

export function setFirstName(payload) {
    return { type: 'SET_FIRST_NAME', payload };
};

export function setLastName(payload) {
    return { type: 'SET_LAST_NAME', payload };
};

export function setAuthStep(payload) {
    return { type: 'SET_AUTH_STEP', payload }
}