import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage, WelcomePage, RegistrationPage } from './views';
import history from './utils/history';
import { Notification } from './components';

class App extends Component {
  render() {
    return (

      <Router history={history}>
        <div className='container'>
          <Notification />
          <Route path='/' exact component={LoginPage} />
          <Route path='/registration' exact component={RegistrationPage} />
          <Route path='/welcome' exact component={WelcomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
