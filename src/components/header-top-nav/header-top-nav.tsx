import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelArticles} from "../../models/articles";
import {Link} from "@mui/material";
import styles from './header-top-nav.module.css';

const HeaderTopNav:FC = () => {
    const articles = useStore(modelArticles.$articles);

    useEffect(() => {
        modelArticles.articleRequest();
    }, []);

    return (
        <nav className={styles.nav}>
            {articles.map(item => <Link key={item.id} href={item.alias} >{item.name}</Link>)}
        </nav>
    );
}

export default HeaderTopNav;