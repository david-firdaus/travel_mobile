import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HomeComponent from './components/HomeComponent';

const RouterComponent = () => {
    return (
        <Router >
            <Scene key='root'>
                <Scene key='login' title='Login Page' component={LoginForm} initial />
                <Scene key='home' title='Home Page' component={HomeComponent} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
