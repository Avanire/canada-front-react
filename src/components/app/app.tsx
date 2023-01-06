import React, {FC} from "react";
import styles from './app.module.css';
import HeaderTop from "../header-top/header-top";
import '../../models/init';
import {Container} from "@mui/material";
import HeaderMiddle from "../header-middle/header-middle";

const App: FC = () => {
    return (
        <>
            <header className={styles.header}>
                <Container>
                    <HeaderTop/>
                    <HeaderMiddle/>
                </Container>
            </header>
        </>
    );
}

export default App;