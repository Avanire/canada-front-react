import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelMenu} from "../../models/menu";
import styles from './main-menu.module.css';
import uuid from "react-uuid";
import {Link} from "react-router-dom";
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
                    className={`
                        ${styles.menuItem} 
                        ${item.icon_class && item.icon_class.includes('fire') ? styles.fire : ''} 
                        ${item.icon_class && item.icon_class.includes('flash') ? styles.flash : ''} 
                        ${item.icon_class && item.icon_class.includes('last') ? styles.last : ''}
                    `}
                    to={item.url}
                    key={uuid()}
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    );
}

export default MainMenu;