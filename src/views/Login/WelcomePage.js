import React, { Component } from 'react';
import { Grid } from '@material-ui/core';


class WelcomePage extends Component {

    render() {
        console.log('AAAAAAAAAAAAAa')
        return (
            <Grid
                container
                justify="center"
                alignItems="center"
                className="login-page">
                <h1 className="title">Hunkish</h1>
            </Grid>
        )
    }
};

export default WelcomePage;