import React, { Component } from 'react';
import firebase from 'firebase';
// import {HashRouter, Match} from 'react-router';
import {
    BrowserRouter as Router,
    Route,
    useParams
} from 'react-router-dom';
import 'normalize-css';

import styles from './app.css';
import Header from '../header/index';
import Main from '../main/index';
import Profile from '../profile/index';
import Login from '../login/index';

class App extends Component {
    constructor() {
        super()
        this.state = {
            user: null
        }
        this.handleOnAuth = this.handleOnAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    //metodo de ciclo de vida del componente -> depende del estado en el momento del componente
    componentWillMount () {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({user})
                console.log(user);
            } else {
                this.setState({user: null})
            }
        })//esta funcion comprueba si el user esta autenticado
    }
    handleOnAuth() {
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider)//se nos despliega el pop up para hacer login
            .then(result => console.log(`${result.user.email} ha iniciado sesion`))
            .catch(error => console.error(`Error ${error.code}: ${error.message}`))
    }
    handleLogout() {
        firebase.auth().signOut()
            .then(() => console.log('te has desconectado correctamente'))
            .catch(() => console.error('un error ocurrio'))
    }
    render() {
        return ( 
        <Router >
            <div >
                <Header/>
                <Route path = '/user/:userName/:displayName' component = {() => {
                        //component <profile/> pasando params.userNme
                    return ( 
                        <Profile 
                            displayName = { useParams().displayName }
                            userName = { useParams().userName }
                        />
                    )
                    }}
                />  
                <Route exact path = '/' component = {() => {

                    if (this.state.user) {
                        return (
                            <Main 
                                user = { this.state.user }
                                onLogout={this.handleLogout}
                            />
                        )
                    } else {
                        //component <login/>
                        return ( <Login onAuth = { this.handleOnAuth }/>
                        )
                    }
                    }}
                />  
                <Route path = '/profile' component = {() => {
                        return ( 
                            <Profile picture = { this.state.user.photoURL }
                            userName = { this.state.user.email.split('@')[0] }
                            displayName = { this.state.user.displayName }
                            location = { this.state.user.location }
                            emailAdress = { this.state.user.email }
                            />
                        )
                    }}
                /> 
            </div> 
        </Router>
        )
    }
}
export default App;