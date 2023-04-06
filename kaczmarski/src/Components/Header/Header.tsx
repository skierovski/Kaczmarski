import styles from './Header.module.css'
import React from 'react';
import Input from './Input/Input';

const Header: React.FC = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Container}>
            <p>PODAJ NIP LUB NAZWĘ DŁUŻNIKA</p>
            <Input/>
            
            </div>
        </header>
    )
}

export default Header;