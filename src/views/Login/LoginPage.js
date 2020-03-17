import React from 'react';
import { LoginForm } from '../../components';
import { Grid } from '@material-ui/core';


function LoginPage() {
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className="login-page">
            <h1 className="title">Hunkish</h1>
            <LoginForm />

        </Grid>
    )

};

export default LoginPage;