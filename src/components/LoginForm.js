import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { TextField, Button, Paper, FormControl, FormHelperText } from '@material-ui/core';
import logo from '../assets/logo-milan.png'
import { setUser, resetUser, setToken, showNotification } from '../store/actions';
import { getUser } from '../store/selectors';
import history from '../utils/history'

class LoginFormComponent extends Component {
    async handleLogin(e) {
        const { user, dispatch } = this.props;
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/auth/login', user);
            dispatch(resetUser());
            // console.log(response.data.token)
            // dispatch(setToken(response.data.token))

            return history.push('/welcome')
        } catch (e) {
            const errorMessage = JSON.stringify(e.message).replace(/"/g, "");
            return dispatch(showNotification('error', errorMessage))
        }
    }

    render() {
        const { dispatch } = this.props;

        return (
            <Paper className="login-form-card"
                elevation={5}>
                <div className="form-logo">
                    <img alt="Milan Logo" src={logo} />
                </div>
                <FormControl className="form-container">
                    <TextField
                        label="Email"
                        variant="outlined"
                        onChange={(e) => dispatch(setUser('email', e.target.value))}
                    />

                    <TextField
                        label="Password"
                        variant="outlined"
                        onChange={e => dispatch(setUser('password', e.target.value))}
                    />
                    <FormHelperText
                        className="registration-link"
                        onClick={() => history.push('/registration')}
                    >
                        Registrazione
                    </FormHelperText>
                    <Button type="submit"
                        variant="contained"
                        style={{ background: 'red', color: 'white' }}
                        onClick={e => this.handleLogin(e)}
                    >
                        Invia
                </Button>
                </FormControl>
            </Paper>
        )
    }
};

const selectors = (state) => {
    return {
        user: getUser(state)
    }
}

const LoginForm = connect(selectors)(LoginFormComponent)

export default LoginForm;