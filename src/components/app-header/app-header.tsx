import React, {FC} from "react";
import styles from "../app/app.module.css";
import {Container} from "@mui/material";
import HeaderTop from "../header-top/header-top";
import HeaderMiddle from "../header-middle/header-middle";
import HeaderBottom from "../header-bottom/header-bottom";

const AppHeader: FC = () => {
    return (
        <header className={styles.header}>
            <Container>
                <HeaderTop/>
                <HeaderMiddle/>
                <HeaderBottom/>
            </Container>
        </header>
    );
}

export default AppHeader;