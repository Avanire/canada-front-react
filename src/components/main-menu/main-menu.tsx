import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelMenu} from "../../models/menu";
import styles from './main-menu.module.css';
import uuid from "react-uuid";
import {NavLink} from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MainMenu: FC = () => {
    const menu = useStore(modelMenu.$menu);
    const isLoading = useStore(modelMenu.$menuIsLoaded);

    useEffect(() => {
        modelMenu.menuRequest('main');
    }, []);

    return (
        <nav className={`${styles.menu} mb-2`}>
            {isLoading ? <div className={`w-full`}><Skeleton count={5} inline={true} width={`143px`} height={46} className={`mr-1.5`} /></div> : menu.map(item => item.children.length > 0 ? (
                <div className={`${styles.menuItemParent} ${item.url === 'dog' ? styles.dog : ''} ${item.url === 'cat' ? styles.cat : ''}`} key={uuid()}>
                    <NavLink to={item.url}>
                        {item.title}
                    </NavLink>
                    <nav className={styles.childrenMenu}>
                        {item.children.map(children => (
                            <NavLink key={children.id} to={children.url}>{children.title}</NavLink>))}
                    </nav>
                </div>
            ) : (
                <NavLink
                    className={`
                        ${styles.menuItem} 
                        ${item.icon_class && item.icon_class.includes('last') ? styles.last : ''}
                    `}
                    to={item.url}
                    key={uuid()}
                >
                    {item.title}
                </NavLink>
            ))}
        </nav>
    );
}

export default MainMenu;