import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';




class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCPSIwIcW_u19LrCGqKtQ8ZszhN5qZiPF8',
      authDomain: 'authapp-a1a05.firebaseapp.com',
      databaseURL: 'https://authapp-a1a05.firebaseio.com',
      projectId: 'authapp-a1a05',
      storageBucket: 'authapp-a1a05.appspot.com',
      messagingSenderId: '318706156692'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
