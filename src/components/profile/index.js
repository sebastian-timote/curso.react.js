import React, {Component} from 'react';

import styles from './profile.css';



class Profile extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div className={styles.root}>
                <img className={styles.avatar} src={this.props.picture} />
                <span className={styles.name}>{this.props.displayName}</span>
                <ul className={styles.data}>
                    <li>
                        <span className='fas fa-users' ></span> {this.props.userName}
                    </li>
                    <li>
                        <span className='fas fa-envelope' ></span> {this.props.emailAdress}
                    </li>
                    <li>
                        <span className='fas fa-map-marker' ></span> {this.props.location}
                    </li>
                </ul>

            </div>
        )
    }
}
export default Profile;