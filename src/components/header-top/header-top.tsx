import React, {FC} from "react";
import HeaderTopNav from "../header-top-nav/header-top-nav";
import {Link} from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HeaderTop: FC<{address: string}> = ({address}) => {

    return (
        <section className={`flex gap-8 my-5 flex-wrap items-center`}>
            <div className={`font-normal text-sm min-w-[183px]`}>{address ? address : <Skeleton />}</div>
            <HeaderTopNav/>
            <div className={`ml-auto`}><Link className={`text-sm text-[var(--text-color)]`} to='#'>Вход</Link> / <Link
                className={`text-sm text-[var(--text-color)]`} to='#'>Регистрация</Link></div>
        </section>
    );
}

export default HeaderTop;