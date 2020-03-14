import React, { Component } from 'react';
import { connect } from 'react-redux'
import { LoginForm, RegistrationForm } from '../../components';
import { Grid } from '@material-ui/core';
import { getAuthentificationStep } from '../../store/selectors';


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