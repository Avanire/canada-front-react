import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelMenu} from "../../models/menu";
import {Link} from '@mui/material';
import styles from './main-menu.module.css';
import uuid from "react-uuid";

const MainMenu: FC = () => {
    const menu = useStore(modelMenu.$menu);

    useEffect(() => {
        modelMenu.menuRequest('main');
    }, []);

    return (
        <nav className={styles.menu}>
            {menu.map(item => item.children.length > 0 ? (
                <div className={styles.menuItemParent} key={uuid()}>
                    <Link href={item.url}>
                        {item.title}
                    </Link>
                    <nav className={styles.childrenMenu}>
                        {item.children.map(children => (
                            <Link key={children.id} href={children.url}>{children.title}</Link>))}
                    </nav>
                </div>
            ) : (
                <Link
                    className={`${styles.menuItem} ${item.icon_class && item.icon_class.includes('voyager-star-two') ? styles.star : ''} ${item.icon_class && item.icon_class.includes('last') ? styles.last : ''}`}
                    href={item.url}
                    key={uuid()}
                >
                    {item.title}
                </Link>
            ))
            }
        </nav>
    );
}

export default MainMenu;