import React, {FC, useEffect} from "react";
import {Link} from "react-router-dom";
import {useStore} from "effector-react";
import {modelMainText} from "../../models/main-text";
import {STORAGE_URL} from "../../utils/constans";
import styles from './main-text.module.css';

const MainText: FC = () => {
    const mainText = useStore(modelMainText.$mainText);

    useEffect(() => {
        modelMainText.mainTextRequest();
    }, []);

    return (
        <section className={`${styles.mainText} flex justify-between py-24 px-14 mb-16 relative`}>
            <div className={`basis-1/2 max-lg:basis-full`}>
                <h1 className={`text-3xl font-semibold mb-6`}>{mainText?.heading}</h1>
                <div dangerouslySetInnerHTML={{ __html: mainText?.content ? mainText.content : '' }} />
                <Link to={`#`} className={`text-[var(--main-purple)] text-lg font-medium`}>Подробнее</Link>
            </div>
            <img className={`absolute bottom-0 right-0 w-1/2 max-lg:hidden`} src={`${STORAGE_URL}/${mainText?.image}`} alt=""/>
        </section>
    );
}

export default MainText;