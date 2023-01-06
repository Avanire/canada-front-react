import React, {FC} from 'react';
import Phone from "../phone/phone";
import styles from './header-phone-block.module.css';

const HeaderPhoneBlock: FC = () => {
    return (
        <>
            <Phone/>
            <div className={styles.callback}>Заказать звонок</div>
        </>
    );
}

export default HeaderPhoneBlock;