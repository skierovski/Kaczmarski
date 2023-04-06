import React from "react";
import { text } from "stream/consumers";

export interface ButtonProps {
    text: string;
}

const Button:React.FC<ButtonProps> = ({text}) => {
    return(
        <div>
            <button>{text}</button>
        </div>
    )
}


export default Button;