import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';

import styles from './main.css';
import MessageList from '../messageList';
import InputText from '../inputText/index';
import ProfileBar from '../profilebar/index';


class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: Object.assign({}, this.props.user, {retweets: [] },{favorites: [] }),
            openText: false,
            messages: [{
                id: uuidv4(),
                text: 'mensaje de twitter',
                picture: 'https://s.gravatar.com/avatar/14c0e7e6e017f6fcffd555cc45ebe1fd?s=80',
                displayName: 'sebastian timote',
                userName: 'timo0011',
                date: Date.now()-180000,
                retweets: 0,
                favorites: 0
            },
            {
                id: uuidv4(),
                text: 'hijitos adivinen quien hp soy',
                picture: 'https://s.gravatar.com/avatar/14c0e7e6e017f6fcffd555cc45ebe1fd?s=80',
                displayName: 'alvaraco uribe',
                userName: 'paraquito0011',
                date: Date.now()-1800000,
                retweets: 0,
                favorites:0

            }
        ]
        }
        this.handleCloseText = this.handleCloseText.bind(this);
        this.handleOpenText = this.handleOpenText.bind(this);
        this.handleSendText = this.handleSendText.bind(this);
        this.handleRetweet = this.handleRetweet.bind(this);
        this.handleFavorite = this.handleFavorite.bind(this);

    }
    handleSendText(event){
        event.preventDefault();
        let newMessage = {
            id: uuidv4(),
            userName: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            picture: this.props.user.photoURL,
            date: Date.now(),
            text: event.target.text.value,
            favorites: 0,
            retweets: 0
        }
        this.setState({
            messages: this.state.messages.concat(newMessage),//creamos un nuevo array pero no modificamos el que ya esta
            openText: false
        })
        //console.log(this.state)
    }
    handleCloseText(event){
        event.preventDefault();
        this.setState({ openText: false})
    }
    handleOpenText(event){
        event.preventDefault();
        this.setState({openText: true})
    }
    renderOpenText() {
        if (this.state.openText) {
            return <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}/>
        }
    }
    handleRetweet(msgId){
        let alreadyRetweeted = this.state.user.retweets.filter(rt => rt == msgId)
        if (alreadyRetweeted.length == 0) {//si no tenemos ninguno no ha sido retuiteado
            //console.log(alreadyRetweeted);return;
            let messages = this.state.messages.map(msg => {
                if (msg.id == msgId) {
                    msg.retweets++
                }
                return msg
            })
            let user = Object.assign({}, this.state.user)
            user.retweets.push(msgId)
            this.setState({
                messages,
                user
            })
        }
        //console.log('nada');return;
    }
    handleFavorite(msgId){
        let alreadyFavorited = this.state.user.favorites.filter(fav => fav == msgId)
        if (alreadyFavorited.length == 0) {
            
            let messages = this.state.messages.map(msg => {
                if (msg.id == msgId) {
                    msg.favorites++
                }
                return msg
            })
            //console.log(messages);return;
            let user = Object.assign({}, this.state.user)
            user.favorites.push(msgId)
            this.setState({
                messages,
                user
            })
        }
        //console.log('nada1');return;

    }
    render() {
        return(
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    userName={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}//le decimos que no use el this de la clase si no this del componente propio
                ></ProfileBar>
                {this.renderOpenText()}
                <MessageList 
                    messages={this.state.messages}
                    onRetweet={this.handleRetweet}
                    onFavorite={this.handleFavorite}
                ></MessageList>
            </div>
        )
    }
}
export default Main;