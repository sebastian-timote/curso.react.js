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
            {this.props.messages.map( msg => {
                return(
                    <Message 
                        text= {msg.text} 
                        key={msg.id} 
                        picture={msg.picture}
                        displayName={msg.displayName} 
                        userName={msg.userName}
                        date={msg.date}
                        numRetweets ={msg.retweets}
                        numFavorites ={msg.favorites}
                        onRetweet={() => this.props.onRetweet(msg.id)}
                        onFavorite={() => this.props.onFavorite(msg.id)}
                        onReplyTweet={() => this.props.onReplyTweet(msg.id, msg.userName)}

                    ></Message>
                )
            }).reverse()}
        </div>
        )
    }
}
export default MessageList;
