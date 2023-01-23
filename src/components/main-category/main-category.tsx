import React, {FC} from "react";
import {IMenu} from "../../utils/types";
import styles from './main-category.module.css'
import {Link} from "react-router-dom";
import {STORAGE_URL} from "../../utils/constans";

interface IMainCategory {
    name: string;
    link: string;
    children: Array<IMenu>;
    image?: string;
}

const MainCategory: FC<IMainCategory> = ({name, link, children, image}) => {
    return (
        <section className={`${styles.category} flex-auto relative flex items-center`}>
            <div className={`pr-12`}><img src={`${STORAGE_URL}/${image}`} alt=''/></div>
            <div className={``}>
                <h3 className={`font-medium text-3xl pb-6`}><Link to={link}>{name}</Link></h3>
                <div className={`flex gap-5 flex-wrap max-w-[219px]`}>
                    {children.map(item => <Link className={``} key={item.id} to={item.url}>{item.title}</Link>)}
                </div>
            </div>
        </section>
    );
}

export default MainCategory;