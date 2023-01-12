import React, {FC} from "react";
import {IMenu} from "../../utils/types";
import styles from './main-category.module.css'
import {Link} from "react-router-dom";

interface IMainCategory {
    name: string;
    link: string;
    children: Array<IMenu>;
}

const MainCategory: FC<IMainCategory> = ({name, link, children}) => {
    return (
        <section className={`${styles.category} p-8 flex-auto`}>
            <h3><Link to={link}>{name}</Link></h3>
            <div className={`${styles.childrenLinks} gap-2 flex-wrap`}>
                {children.map(item => <Link className={styles.link} key={item.id} to={item.url}>{item.title}</Link>)}
            </div>
        </section>
    );
}

export default MainCategory;