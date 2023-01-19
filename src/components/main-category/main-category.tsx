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
        <section className={`${styles.category} p-8 flex-auto relative`}>
            <h3 className={`mb-10 font-semibold text-4xl`}><Link to={link}>{name}</Link></h3>
            <div>
                <div className={`grid grid-rows-2 grid-flow-col-dense gap-2 max-w-[12rem]`}>
                    {children.map(item => <Link className={`py-2.5 px-3.5 whitespace-nowrap bg-[#fff] rounded-lg block`}
                                                key={item.id} to={item.url}>{item.title}</Link>)}
                </div>
                <div className={`absolute bottom-0 right-2 max-xl:hidden`}><img src={`${STORAGE_URL}/${image}`} alt=''/></div>
            </div>
        </section>
    );
}

export default MainCategory;