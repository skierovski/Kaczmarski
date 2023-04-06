import React from "react";
import styles from './Input.module.css'


const Input: React.FC = () => {
    return (
        <div>
            <input className={styles.Input}/>
        </div>
    )
}

export default Input;