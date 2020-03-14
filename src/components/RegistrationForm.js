import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Paper, FormControl, FormHelperText, TextField } from '@material-ui/core';
import { getUser } from '../store/selectors';
import history from '../utils/history'

function RegistrationFormComponent() {
    return (
        <Paper className="registration-form-card">
            <FormControl className="form-container">
                <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Nome"
                />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Cognome"
                    name="lastName"
                    autoComplete="lname"
                />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    autoComplete="email"
                />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormHelperText className="back-to-link" onClick={() => history.push('/')}>Vai al login</FormHelperText>
                <Button
                    type="submit"
                    variant="contained"
                    style={{ background: 'red', color: 'white', width: '200px', alignSelf: 'center' }}
                >
                    Invia Richiesta
                    </Button>
            </FormControl>
        </Paper>
    );
}

const selectors = (state) => {
    return {
        user: getUser(state),
    }
}

const RegistrationForm = connect(selectors)(RegistrationFormComponent)

export default RegistrationForm;