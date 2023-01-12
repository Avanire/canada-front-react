import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelMenu} from "../../models/menu";
import styles from './main-menu.module.css';
import uuid from "react-uuid";
import {Link} from "react-router-dom";

const MainMenu: FC = () => {
    const menu = useStore(modelMenu.$menu);

    useEffect(() => {
        modelMenu.menuRequest('main');
    }, []);

    return (
        <nav className={`${styles.menu} mb-2`}>
            {menu.map(item => item.children.length > 0 ? (
                <div className={styles.menuItemParent} key={uuid()}>
                    <Link to={item.url}>
                        {item.title}
                    </Link>
                    <nav className={styles.childrenMenu}>
                        {item.children.map(children => (
                            <Link key={children.id} to={children.url}>{children.title}</Link>))}
                    </nav>
                </div>
            ) : (
                <Link
                    className={`${styles.menuItem} ${item.icon_class && item.icon_class.includes('voyager-star-two') ? styles.star : ''} ${item.icon_class && item.icon_class.includes('last') ? styles.last : ''}`}
                    to={item.url}
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