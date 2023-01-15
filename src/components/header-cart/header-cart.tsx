import React, {FC} from "react";
import HeaderButton from "../header-button/header-button";
import Bag from '../../images/Bag.svg';
import Bookmark from "../../images/Bookmark.svg";

const HeaderCart: FC = () => {
    return (
        <div className={`flex items-center gap-4`}>
            <HeaderButton image={Bookmark} link='#'/>
            <HeaderButton image={Bag} link='#'/>
        </div>
    );
}

export default HeaderCart;