import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import Firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
    componentWillMount(){
        Firebase.initializeApp({
            apiKey: "AIzaSyCHTELpCSayJyPIdOAxBk9zIl3nUhNIjko",
            authDomain: "manager-67155.firebaseapp.com",
            databaseURL: "https://manager-67155.firebaseio.com",
            storageBucket: "manager-67155.appspot.com",
            messagingSenderId: "311297679560"
        });
    }


    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <Router />

             </Provider>
    )
    }

}

export default App;