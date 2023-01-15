import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import HeaderTopNav from "../header-top-nav/header-top-nav";
import {modelSetting} from "../../models/settings";
import {Link} from "react-router-dom";

const HeaderTop: FC = () => {
    const address = useStore(modelSetting.$address);

    useEffect(() => {
        modelSetting.addressRequest('address');
    }, []);

    return (
        <section className={`flex gap-8 my-5 flex-wrap items-center`}>
            <div className={`font-normal text-sm`}>{address}</div>
            <HeaderTopNav/>
            <div className={`ml-auto`}><Link className={`text-sm text-[var(--text-color)]`} to='#'>Вход</Link> / <Link className={`text-sm text-[var(--text-color)]`} to='#'>Регистрация</Link></div>
        </section>
    );
}

export default HeaderTop;