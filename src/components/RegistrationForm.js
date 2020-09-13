import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button, Paper, FormControl, FormHelperText, TextField } from '@material-ui/core';
import { getUser } from '../store/selectors';
import { setUser } from '../store/actions';
import history from '../utils/history'

class RegistrationFormComponent extends Component {
    async handleRegistration(e) {
        const { user } = this.props;
        e.preventDefault();

        await axios.post('http://localhost:8000/register', user)
    };

    render() {
        const { dispatch } = this.props;
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
                        onChange={e => dispatch(setUser('firstName', e.target.value))}
                    />
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Cognome"
                        name="lastName"
                        autoComplete="lname"
                        onChange={e => dispatch(setUser('lastName', e.target.value))}
                    />
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        onChange={e => dispatch(setUser('email', e.target.value))}
                    />
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        onChange={e => dispatch(setUser('password', e.target.value))}
                    />
                    <FormHelperText className="back-to-link" onClick={() => history.push('/')}>Vai al login</FormHelperText>
                    <Button
                        type="submit"
                        variant="contained"
                        style={{ background: 'red', color: 'white', width: '200px', alignSelf: 'center' }}
                        onClick={(e) => this.handleRegistration(e)}
                    >
                        Invia Richiesta
                    </Button>
                </FormControl>
            </Paper>
        );
    }
};

const selectors = (state) => {
    return {
        user: getUser(state),
    }
}

const RegistrationForm = connect(selectors)(RegistrationFormComponent)

export default RegistrationForm;