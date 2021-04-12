import React from 'react';
import PropTypes from 'prop-types';

import styles from './profile.css';

const propTypes = {
    picture:PropTypes.string.isRequired,
    displayName:PropTypes.string.isRequired,
    userName:PropTypes.string.isRequired,
    emailAdress:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired
}

function Profile({picture, displayName, userName, emailAdress, location}) {
    return (
        <div className={styles.root}>
            <img  alt="imagen perfil" className={styles.avatar} src={picture} />
            <span className={styles.name}>{displayName}</span>
            <ul className={styles.data}>
                <li>
                    <span className='fas fa-users' ></span> {userName}
                </li>
                <li>
                    <span className='fas fa-envelope' ></span> {emailAdress}
                </li>
                <li>
                    <span className='fas fa-map-marker' ></span> {location}
                </li>
            </ul>

        </div>
    )
}
Profile.propTypes=propTypes;
export default Profile;