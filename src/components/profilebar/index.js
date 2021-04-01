import React, {Component} from 'react';
import styles from './profile-bar.css';


class ProfileBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.root}>
                <figure>
                    <img className={styles.avatar} src={this.props.picture}/>
                </figure>
                <span className={styles.userName}>hola @{this.props.userName}</span>
                <button onClick={this.props.onOpenText} className={styles.button}>
                    <span className="fas fa-edit"> Tweet!</span>
                </button>
            </div>
        )
    }
}
export default ProfileBar;