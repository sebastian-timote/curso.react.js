import React from 'react';
import PropTypes from 'prop-types';
import Message  from '../Message/index';
import styles from './message-list.css';
const propTypes = {
    messages:PropTypes.arrayOf(PropTypes.object).isRequired,
    onRetweet:PropTypes.func.isRequired,
    onFavorite:PropTypes.func.isRequired,
    onReplyTweet:PropTypes.func.isRequired
}


function MessageList({messages, onRetweet, onFavorite, onReplyTweet}) {
    return(
        <div className={styles.root}>
            {messages.map( msg => {
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
                        onRetweet={() => onRetweet(msg.id)}
                        onFavorite={() => onFavorite(msg.id)}
                        onReplyTweet={() => onReplyTweet(msg.id, msg.userName)}

                    ></Message>
                )
            }).reverse()}
        </div>
        )
}
MessageList.propTypes=propTypes;
export default MessageList;
