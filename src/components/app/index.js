import React, {Component} from 'react';
import 'normalize-css';

import styles from './app.css';
import Header from '../header/index';
import Main from '../main/index';


class App extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                photoURL: "https://i.pinimg.com/originals/0e/5e/d3/0e5ed305f4d5a37eb08559dba929805b.jpg",
                email: "stimotev11@gmail.com",
                onOpenText: false,
                displayName: 'sebastian timoteV'
            }
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <Main user={this.state.user}/>
            </div>
        )
    }
}
export default App;