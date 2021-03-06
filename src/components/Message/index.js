import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './message.css';
import moment from 'moment';

const propTypes = {
    userName: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    numRetweets: PropTypes.number.isRequired ,
    numFavorites: PropTypes.number.isRequired,
    onReplyTweet: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onRetweet: PropTypes.func.isRequired

}

class Message extends Component {
    constructor(props){
        super(props)
        // console.log(props);
        this.state= {
            pressFavorite: false,
            pressRetweet: false
        }
        this.onPressRetweet = this.onPressRetweet.bind(this);
        this.onPressFavorite = this.onPressFavorite.bind(this);
    }
    onPressFavorite(){
        // console.log(this);return;
        this.props.onFavorite();
        
        this.setState({pressFavorite: true})

    }
    onPressRetweet(){
        // console.log(props);return;
        this.props.onRetweet();
        this.setState({pressRetweet: true})

    }

    render(){//role='button' y KeyDown={this.onPressFavorite} y aria-label="reply" ->  se coloca por un warning: Non-form HTML elements with event handlers require a role
        let dateFormat = moment(this.props.date).fromNow();
        let userLink = `/user/${this.props.userName}/${this.props.displayName}`//<Link> se comporta como un elemento a href de html
        return(
        <div className={styles.root}>
            <div className={styles.user}>
                <Link to={userLink}>
                    <figure>
                        <img alt="imagen perfil" className={styles.avatar} src={this.props.picture}></img>
                    </figure>
                </Link>
                <span className={styles.displayName}>{this.props.displayName}</span>
                <span className={styles.userName}>{this.props.userName}</span>
                <span className={styles.date}>{dateFormat}</span>
            </div>
            <h3>{this.props.text}</h3>
            <div className={styles.buttons}>
                <div className={styles.icon}>
                    <span className="fas fa-reply" onClick={this.props.onReplyTweet} role='button' aria-label="reply" onKeyDown={this.props.onReplyTweet}></span>
                </div>
                <div className={(this.state.pressRetweet) ? styles.rtGreen : '' } onClick={this.onPressRetweet} role='button' onKeyDown={this.onPressRetweet} aria-label="retweet">
                    <span className="fas fa-retweet"></span>
                    <span className={styles.num}>{this.props.numRetweets}</span>
                </div>
                <div className={(this.state.pressFavorite) ? styles.fvYellow : '' } onClick={this.onPressFavorite} role='button' onKeyDown={this.onPressFavorite} aria-label="favorite">
                    <span className="fas fa-star"></span>
                    <span className={styles.num}>{this.props.numFavorites}</span>

                </div>
            </div>
            
        </div>
        )
    }
}
Message.propTypes = propTypes;
export default Message;