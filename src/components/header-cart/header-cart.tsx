import React, {FC, useState} from "react";
import HeaderButton from "../header-button/header-button";
import Bag from '../../images/Bag.svg';
import styles from './header-cart.module.css';
import Bookmark from "../../images/Bookmark.svg";

const HeaderCart: FC = () => {
    const [sum, setSum] = useState<number>(100000);

    return (
        <div className={`flex items-center gap-4`}>
            <HeaderButton image={Bookmark} link='#'/>
            <HeaderButton image={Bag} link='#' />
            <div>
                <div className={styles.cartHeader}>Корзина</div>
                <div className={styles.cartSum}>Товаров на {sum} р.</div>
            </div>
        </div>
    );
}

export default HeaderCart;