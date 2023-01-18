import React, {FC} from "react";
import {Link} from "react-router-dom";
import {IImageList} from "../../utils/types";
import {STORAGE_URL} from "../../utils/constans";
import styles from "./image-list.module.css";

const ImageList: FC<IImageList> = ({heading, link, list}) => {
    return (
        <section className={`mb-20`}>
            <div className={`flex justify-between items-center mb-8`}>
                <h3>{link ? <Link to={link} className={`${styles.link}`}>{heading}</Link> : heading}</h3>
            </div>
            <div className={`flex flex-wrap`}>
                {list.map(item => <Link to={item.alias} key={item.id}><img className={`p-5 grayscale hover:grayscale-0`} src={STORAGE_URL + '/' + item.image}
                                       alt={item.name}/></Link>)}
            </div>
        </section>
    );
}

export default ImageList;