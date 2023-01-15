import React, {FC} from "react";
import logo from '../../images/logo.png';
import {Link} from "react-router-dom";

const Logo: FC = () => {
    return (
        <Link to='/' className={`basis-64 flex items-center gap-x-5`}>
            <img src={logo} alt="CanadaZoo" />
            <p className={`font-bold text-2xl text-[var(--gray-1)]`}>CanadaZoo.ru</p>
        </Link>
    );
}

export default Logo;