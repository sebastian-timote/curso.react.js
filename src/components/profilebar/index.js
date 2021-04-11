import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './profile-bar.css';


class ProfileBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.root}>
                <Link to='/profile' >
                    <figure>
                        <img className={styles.avatar} src={this.props.picture}/>
                    </figure>
                </Link>
                <span className={styles.userName}> @{this.props.userName}</span>
                <button onClick={this.props.onOpenText} className={styles.button}>
                    <span className="fas fa-edit"> Tweet!</span>
                </button>
            </div>
        )
    }
}
export default ProfileBar;