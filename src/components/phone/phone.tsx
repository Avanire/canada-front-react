import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelSetting} from "../../models/settings";
import styles from './phone.module.css';

const Phone: FC = () => {
    const phone = useStore(modelSetting.$phone);

    useEffect(() => {
        modelSetting.phoneRequest('phone');
    }, []);

    return (
        <div className={styles.phone}>{phone}</div>
    );
}

export default Phone;