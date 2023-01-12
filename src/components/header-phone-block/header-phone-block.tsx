import React, {FC} from 'react';
import Phone from "../phone/phone";
import styles from './header-phone-block.module.css';

const HeaderPhoneBlock: FC = () => {
    return (
        <div>
            <Phone/>
            <div className={styles.callback}>Заказать звонок</div>
        </div>
    );
}

export default HeaderPhoneBlock;