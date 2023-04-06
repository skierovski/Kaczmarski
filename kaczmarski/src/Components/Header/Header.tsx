import styles from './Header.module.css'
import React from 'react';
import Input from './Input/Input';
import Button from './Button/Button';

const Header: React.FC = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Container}>
            <p>PODAJ NIP LUB NAZWĘ DŁUŻNIKA</p>
            <div className={styles.SearchBar}>
            <Input/>
            <Button text="SZUKAJ"/>
            </div>
            </div>
        </header>
    )
}

export default Header;