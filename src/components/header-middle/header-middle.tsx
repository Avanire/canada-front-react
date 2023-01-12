import React, {FC} from "react";
import Logo from "../logo/logo";
import Search from "../search/search";
import HeaderPhoneBlock from "../header-phone-block/header-phone-block";
import HeaderCart from "../header-cart/header-cart";

const HeaderMiddle: FC = () => {
    return (
        <section className={`flex justify-between items-center flex-wrap mb-5`}>
            <Logo/>
            <Search/>
            <HeaderPhoneBlock/>
            <HeaderCart/>
        </section>
    );
}

export default HeaderMiddle;