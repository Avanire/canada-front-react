import React, {FC} from "react";
import HeaderButton from "../header-button/header-button";
import Bag from '../../images/Bag.svg';
import Bookmark from "../../images/Bookmark.svg";
import User from '../../images/User.svg';

const HeaderCart: FC = () => {
    return (
        <div className={`flex items-center gap-9`}>
            <HeaderButton image={User} link='#' text='Войти'/>
            <HeaderButton image={Bookmark} link='#' text='Избранное'/>
            <HeaderButton image={Bag} link='#' text='Корзина'/>
        </div>
    );
}

export default HeaderCart;