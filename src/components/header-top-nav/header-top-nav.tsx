import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import styles from './header-top-nav.module.css';
import {Link} from "react-router-dom";
import {modelMenu} from "../../models/menu";

const HeaderTopNav: FC = () => {
    const topMenu = useStore(modelMenu.$topMenu);

    useEffect(() => {
        modelMenu.topMenuRequest('topMenu');
    }, []);

    return (
        <nav className={styles.nav}>
            {topMenu.map(item => <Link key={item.id} to={item.url} className={`text-sm text-[var(--link-color)]`}>{item.title}</Link>)}
        </nav>
    );
}

export default HeaderTopNav;