import React, {FC} from "react";
import styles from "./button.module.css";

interface IButton {
    name: string;
    handleClick?: () => void;
}

const Button:FC<IButton> = ({name, handleClick}) => {
    return (
        <button onClick={handleClick} className={`${styles.cartBtn} py-3 px-6 mr-3`}>{name}</button>
    );
}

export default Button;