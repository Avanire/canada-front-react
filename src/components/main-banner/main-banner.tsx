import React, {FC} from "react";
import styles from './main-banner.module.css';
import {Link} from "react-router-dom";
import {IBanner} from "../../utils/types";

const MainBanner: FC<IBanner> = ({title, description, link, image}) => {

    return (
        <section className={`${styles.banner} p-10 mb-16 flex items-center justify-between`}
                 style={image ? {background: image} : {background: `#F6F7F9`}}
        >
            <div>
                <div className={`${styles.title} mb-3`}>{title}</div>
                <div>{description}</div>
            </div>
            {link ? <Link to={link} className={`${styles.link} py-3 px-6 mr-3`}>Подробнее</Link> : ''}
        </section>
    );
}

export default MainBanner;