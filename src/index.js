import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAXBrh23nRfrx8e9x1quhaA4bGnmYFCQYo",
    authDomain: "the-product-management-intern.firebaseapp.com",
    databaseURL: "https://the-product-management-intern.firebaseio.com",
    projectId: "the-product-management-intern",
    storageBucket: "the-product-management-intern.appspot.com",
    messagingSenderId: "744758020904",
    appId: "1:744758020904:web:002db8166945992dcc1e1d",
    measurementId: "G-L1ZK853X0P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
