import React, {FC, useState} from "react";
import HeaderButton from "../header-button/header-button";
import Bag from '../../images/Bag.svg';
import styles from './header-cart.module.css';

const HeaderCart: FC = () => {
    const [sum, setSum] = useState<number>(100000);

    return (
        <>
            <HeaderButton image={Bag} link='#' />
            <div>
                <div className={styles.cartHeader}>Корзина</div>
                <div className={styles.cartSum}>Товаров на {sum} р.</div>
            </div>
        </>
    );
}

export default HeaderCart;