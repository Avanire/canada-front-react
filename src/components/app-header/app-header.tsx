import React, {FC} from "react";
import styles from "../app/app.module.css";
import HeaderTop from "../header-top/header-top";
import HeaderMiddle from "../header-middle/header-middle";
import MainMenu from "../main-menu/main-menu";

const AppHeader: FC = () => {
    return (
        <header className={`${styles.header} mb-10`}>
            <div className={`container mx-auto`}>
                <HeaderTop/>
                <HeaderMiddle/>
                <MainMenu/>
            </div>
        </header>
    );
}

export default AppHeader;