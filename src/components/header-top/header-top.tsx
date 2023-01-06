import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import HeaderTopNav from "../header-top-nav/header-top-nav";
import {modelSetting} from "../../models/settings";
import {Grid, Link} from "@mui/material";

const HeaderTop: FC = () => {
    const address = useStore(modelSetting.$address);

    useEffect(() => {
        modelSetting.addressRequest('address');
    }, []);

    return (
        <Grid container paddingTop={2.4} paddingBottom={4.5}>
            <Grid item xs={12} md={3}>{address}</Grid>
            <Grid item xs={12} md={7}><HeaderTopNav/></Grid>
            <Grid item xs={12} md={2} textAlign='right'><Link href='#'>Вход</Link> / <Link href='#'>Регистрация</Link></Grid>
        </Grid>
    );
}

export default HeaderTop;