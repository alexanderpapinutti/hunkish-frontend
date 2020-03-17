import React from 'react';
import { RegistrationForm } from '../../components';
import { Grid } from '@material-ui/core';


function RegistrationPage() {

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className="registration-page">
            <h1 className="title">Registrazione</h1>
            <RegistrationForm />
        </Grid>
    )
};

export default RegistrationPage;