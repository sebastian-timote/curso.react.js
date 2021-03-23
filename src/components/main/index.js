import React, {Component} from 'react';
import styles from './main.css';
import MessageList from '../messageList';
class Main extends Component {
    constructor(){
        super()
        this.state = {
            messages: [{
                text: 'mensaje de twitter',
                picture: 'https://s.gravatar.com/avatar/14c0e7e6e017f6fcffd555cc45ebe1fd?s=80',
                displayName: 'sebastian timote',
                userName: 'timo0011',
                date: Date.now()-180000
            },
            {
                text: 'hijitos adivinen quien hp soy',
                picture: 'https://s.gravatar.com/avatar/14c0e7e6e017f6fcffd555cc45ebe1fd?s=80',
                displayName: 'alvaraco uribe',
                userName: 'paraquito0011',
                date: Date.now()-1800000
            }
        ]
        }
    }
    render() {
        return(
            <MessageList messages={this.state.messages}></MessageList>
        )
    }
}
export default Main;