import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import axios from 'axios';
import history from '../../utils/history';

class HomePage extends Component {
    async logout() {
        await axios.post('http://localhost:8000/logout')
        return history.push('/')
    };

    render() {
        return (
            <Grid
                container
                justify="center"
                alignItems="center"
                className="login-page">
                <h1 className="title">Hunkish</h1>
                <Button
                    type="submit"
                    variant="contained"
                    style={{ background: 'red', color: 'white', width: '200px', alignSelf: 'center' }}
                    onClick={() => this.logout()}>Logout</Button>
            </Grid>
        )
    }
};

export default HomePage;