import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelArticles} from "../../models/articles";
import styles from './header-top-nav.module.css';
import {Link} from "react-router-dom";

const HeaderTopNav:FC = () => {
    const articles = useStore(modelArticles.$articles);

    useEffect(() => {
        modelArticles.articleRequest();
    }, []);

    return (
        <nav className={styles.nav}>
            {articles.map(item => <Link key={item.id} to={item.alias} >{item.name}</Link>)}
        </nav>
    );
}

export default HeaderTopNav;