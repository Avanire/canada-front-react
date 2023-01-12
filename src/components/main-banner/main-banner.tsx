import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelBanner} from "../../models/banner";
import styles from './main-banner.module.css';

const MainBanner: FC = () => {
    const banner = useStore(modelBanner.$mainBanner);

    useEffect(() => {
        modelBanner.mainBannerRequest('main');
    }, []);

    return (
        <section className={`${styles.banner} p-10 mb-16`}
                 style={banner?.image ? {background: banner.image} : {background: `#F6F7F9`}}
        >
            <div className={`${styles.title} mb-3`}>{banner?.title}</div>
            <div>{banner?.description}</div>
        </section>
    );
}

export default MainBanner;