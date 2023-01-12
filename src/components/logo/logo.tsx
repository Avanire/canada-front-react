import React, {FC} from "react";
import logo from '../../images/logo.png';
import {Link} from "react-router-dom";

const Logo: FC = () => {
    return (
        <Link to='/' className={`basis-52`}>
            <img src={logo} alt="" />
        </Link>
    );
}

export default Logo;