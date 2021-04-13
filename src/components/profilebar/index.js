import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './profile-bar.css';

const propTypes = {
    picture:PropTypes.string.isRequired,
    userName:PropTypes.string.isRequired,
    onOpenText:PropTypes.func.isRequired
}


function ProfileBar({picture, userName, onOpenText, onLogout}) {
    return (
        <div className={styles.root}>
            <Link to='/profile' >
                <figure>
                    <img alt="imagen perfil" className={styles.avatar} src={picture}/>
                </figure>
            </Link>
            <span className={styles.userName}> @{userName}</span>
            <button onClick={onOpenText} className={styles.button}>
                <span className="fas fa-edit"> Tweet!</span>
            </button>
            <button onClick={onLogout} className={styles.button}>
                <span className="fas fa-sign-out-alt"> Salir</span>
            </button>
        </div>
    )
}
ProfileBar.propTypes=propTypes;
export default ProfileBar;