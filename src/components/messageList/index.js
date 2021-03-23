import React, {Component} from 'react';
import Message  from '../Message/index';
import styles from './message-list.css';

class MessageList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className={styles.root}>
            {this.props.messages.map( (msg, index) => {
                return(
                    <Message 
                        text= {msg.text} 
                        key={index} 
                        picture={msg.picture}
                        displayName={msg.displayName} 
                        userName={msg.userName}
                        date={msg.date}
                    ></Message>
                )
            })}
        </div>
        )
    }
}
export default MessageList;
