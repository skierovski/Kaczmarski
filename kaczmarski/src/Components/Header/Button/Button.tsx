import React from "react";
import styles from './Button.module.css'

export interface ButtonProps {
    text: string;
}

const Button:React.FC<ButtonProps> = ({text}) => {
    return(
        <div>
            <button className={styles.SearchButton}>{text}</button>
        </div>
    )
}


export default Button;