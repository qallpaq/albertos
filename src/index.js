import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {HashRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import firebase from "firebase";
import SelectorContextProvider from "./components/selector-context";


const firebaseConfig = {
    apiKey: "AIzaSyCfxR0CsvCR3Wi3wa0tA-CBTjq9I-f5nk8",
    authDomain: "albertos-57ecb.firebaseapp.com",
    databaseURL: "https://albertos-57ecb.firebaseio.com",
    projectId: "albertos-57ecb",
    storageBucket: "albertos-57ecb.appspot.com",
    messagingSenderId: "242054301676",
    appId: "1:242054301676:web:1aabac09d25921a6c1a2c9",
    measurementId: "G-PR0YK22GYZ"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <SelectorContextProvider>
                <App/>
            </SelectorContextProvider>
        </Router>
    </Provider>
    , document.getElementById('root'));
