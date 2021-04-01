import React, {Component} from 'react';
import styles from './message.css';
import moment from 'moment';


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

    render(){
        let dateFormat = moment(this.props.date).fromNow()
        return(
        <div className={styles.root}>
            <div className={styles.user}>
                <figure>
                    <img className={styles.avatar} src={this.props.picture}></img>
                </figure>
                <span className={styles.displayName}>{this.props.displayName}</span>
                <span className={styles.userName}>{this.props.userName}</span>
                <span className={styles.date}>{dateFormat}</span>
            </div>
            <h3>{this.props.text}</h3>
            <div className={styles.buttons}>
                <div className={styles.icon}>
                    <span className="fas fa-reply"></span>
                </div>
                <div className={(this.state.pressRetweet == true) ? styles.rtGreen : '' } onClick={this.onPressRetweet}>
                    <span className="fas fa-retweet"></span>
                    <span className={styles.num}>{this.props.numRetweets}</span>
                </div>
                <div className={(this.state.pressFavorite == true) ? styles.fvYellow : '' } onClick={this.onPressFavorite}>
                    <span className="fas fa-star"></span>
                    <span className={styles.num}>{this.props.numFavorites}</span>

                </div>
            </div>
            
        </div>
        )
    }
}
export default Message;