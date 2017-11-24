import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDiaTk7eng6iZGGo_1y5iliDe1bVL2R-ww',
      authDomain: 'travels-2d85c.firebaseapp.com',
      databaseURL: 'https://travels-2d85c.firebaseio.com',
      projectId: 'travels-2d85c',
      storageBucket: 'travels-2d85c.appspot.com',
      messagingSenderId: '449563472385'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
