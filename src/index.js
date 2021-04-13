//ejecutar serivdor de webpack con npx webpack serve
import React from 'react';
import { render } from 'react-dom';
import firebase from 'firebase';
import "./assets/style.css";
import App from './components/app/index';
// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDOVhg5OiXcJZmR8kRYi88imge7AnmZqBE",
    authDomain: "curso-react-ef01e.firebaseapp.com",
    projectId: "curso-react-ef01e",
    storageBucket: "curso-react-ef01e.appspot.com",
    messagingSenderId: "736396503632",
    appId: "1:736396503632:web:7b505f11a003a7f5583f55",
    measurementId: "G-9JX8PT9868"
});


render( < App / > , document.getElementById('root'))