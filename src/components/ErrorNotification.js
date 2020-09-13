import React from 'react';
import { connect } from 'react-redux';

import { makeStyles, Collapse, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

import { getNotification } from '../store/selectors';
import { hideNotification } from '../store/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        right: 200,
        left: 200,
        position: 'absolute'
    },
}))

function ErrorNotificationComponent({ notification, hideNotification }) {
    const classes = useStyles();

    if (!notification) {
        return null;
    }

    const { type, content } = notification;

    return (
        <div className={classes.root}>
            <Collapse in={!!notification}>
                {type === 'error' && <Alert severity={type}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                hideNotification(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {content}
                </Alert>}
                {type === 'warning' && <Alert severity={type} onClose={() => { }}>{content}</Alert>}
                {type === 'info' && <Alert severity={type}>{content}</Alert>}
                {type === 'success' && <Alert severity={type}>{content}</Alert>}
            </Collapse>
        </div>
    );
};

const selectors = (state) => {
    return {
        notification: getNotification(state)
    }
}

const ErrorNotification = connect(selectors, { hideNotification })(ErrorNotificationComponent)

export default ErrorNotification;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';


// export default function SimpleAlerts() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <Alert severity="error">This is an error alert — check it out!</Alert>
//             <Alert severity="warning">This is a warning alert — check it out!</Alert>
//             <Alert severity="info">This is an info alert — check it out!</Alert>
//             <Alert severity="success">This is a success alert — check it out!</Alert>
//         </div>
//     );
// }