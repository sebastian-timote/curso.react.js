import React, {Component} from 'react';
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
            // user: {
            //     photoURL: "https://i.pinimg.com/originals/0e/5e/d3/0e5ed305f4d5a37eb08559dba929805b.jpg",
            //     email: "stimotev11@gmail.com",
            //     onOpenText: false,
            //     displayName: 'sebastian timoteV',
            //     location: 'cali, colombia'
            // }
        }
        this.handleOnAuth = this.handleOnAuth.bind(this);
    }
    handleOnAuth() {
        console.log('Auth'); 
    }
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route path='/user/:userName/:displayName' component={() => {
                        //component <profile/> pasando params.userNme
                        return (
                            <Profile
                            displayName={useParams().displayName}
                            userName={useParams().userName}
                            />
                        )
                    }} />
                    <Route exact path='/' component={() => {
                        if (this.state.user) {
                            return (
                                <Main user={this.state.user}/>
                            )
                        }else{
                            //component <login/>
                            return (
                                <Login
                                onAuth={this.handleOnAuth}/>
                            )
                        }
                    }}/>
                    <Route path='/profile' component={() => {
                        return (
                            <Profile
                                 picture={this.state.user.photoURL}
                                 userName={this.state.user.email.split('@')[0]}
                                 displayName={this.state.user.displayName}
                                 location={this.state.user.location}
                                 emailAdress={this.state.user.email}
                                 
                            />
                        )
                    }} />


                </div>
            </Router>
        )
    }
}
export default App;