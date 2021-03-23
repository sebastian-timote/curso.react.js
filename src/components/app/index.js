import React, {Component} from 'react';
import 'normalize-css';

import styles from './app.css';
import Header from '../header/index';
import Main from '../main/index';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}
export default App;