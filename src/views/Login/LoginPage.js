import React, { Component } from 'react';
import { connect } from 'react-redux'
import { LoginForm, RegistrationForm } from '../../components';
import { Grid } from '@material-ui/core';
import { getAuthentificationStep } from '../../store/selectors';


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