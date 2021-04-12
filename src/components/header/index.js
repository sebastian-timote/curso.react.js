//este es un componente sepresentacional sin estado (stateless)-> solo muestran algo visual no usa state, se puede reutilizar y no necesita la clase component
import React from 'react';
import styles from './header.css';

function Header() {
    return (
        <header className={styles.root}>
            <h1 className={styles.logo}>Reacttr</h1>
        </header>
    )
}
export default Header;