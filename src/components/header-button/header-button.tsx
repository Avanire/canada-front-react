import React, {FC} from "react";
import styles from './header-button.module.css';

interface IHeaderButton {
    image: string;
    link: string;
}

const HeaderButton: FC<IHeaderButton> = ({image, link}) => {
    return (
        <div className={styles.button}>
            <img src={image} alt=""/>
        </div>
    );
}

export default HeaderButton;