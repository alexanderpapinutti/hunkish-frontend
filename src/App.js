import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage, HomePage, RegistrationPage } from './views';
import history from './utils/history';
import { Notification, Header } from './components';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    }
  },
});

class App extends Component {
  render() {

    const currentPath = window.location.path;
    const showHeader = currentPath !== '/' && currentPath !== '/registration';

    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <div className='container'>
            <Notification />
            {showHeader && <Header />}
            <Route path='/' exact component={LoginPage} />
            <Route path='/registration' exact component={RegistrationPage} />
            <Route path='/home' exact component={HomePage} />
          </div>
        </ThemeProvider>
      </Router>

    );
  }
}

export default App;
