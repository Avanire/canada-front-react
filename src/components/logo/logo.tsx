import React, {FC} from "react";
import logo from '../../images/logo.png';
import {Link} from "@mui/material";

const Logo: FC = () => {
    return (
        <Link href='/'>
            <img src={logo} alt="" />
        </Link>
    );
}

export default Logo;