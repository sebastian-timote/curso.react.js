import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.css';

const propTypes = {
    onAuth:PropTypes.func.isRequired
}

function Login({onAuth}) {
    return (
        <div className={styles.root}>
            <p className={styles.text}>
                Necesitamos que inicies sesion con tu cuenta de GitHub para que puedas leer y escribir mensajes
            </p>
            <button onClick={onAuth} className={styles.button}>
            login con GitHub <span className='fab fa-github'></span>
            </button>

        </div>
    )
}
Login.propTypes= propTypes;
export default Login;