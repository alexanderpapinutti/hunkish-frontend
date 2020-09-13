const notifications = (state = {}, { type, notificationType, content }) => {
    switch (type) {
        case 'SHOW_NOTIFICATION':
            return { type: notificationType, content }
        case 'HIDE_NOTIFICATION':
            return null
        default:
            return null;
    }
}


export default notifications;