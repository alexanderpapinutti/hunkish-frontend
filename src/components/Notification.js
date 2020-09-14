import React from 'react';
import { connect } from 'react-redux';

import { makeStyles, Collapse, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

import { getNotification } from '../store/selectors';
import { hideNotification } from '../store/actions';

const useStyles = makeStyles(() => ({
    root: {
        right: 200,
        left: 200,
        position: 'absolute'
    },
}))

/// Notification types: error, info, warning & success

function NotificationComponent({ notification, hideNotification }) {
    const classes = useStyles();

    if (!notification) {
        return null;
    }

    const { type, content } = notification;

    return (
        <div className={classes.root}>
            <Collapse in={!!notification}>
                <Alert severity={type} action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => hideNotification()}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }>
                    {content}
                </Alert>
            </Collapse>
        </div>
    );
};

const Notification = connect((state) => {
    return {
        notification: getNotification(state)
    }
}, { hideNotification })(NotificationComponent)

export default Notification;