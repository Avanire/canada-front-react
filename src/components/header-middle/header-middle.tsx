import React, {FC} from "react";
import Logo from "../logo/logo";
import {Grid} from "@mui/material";
import Search from "../search/search";
import HeaderPhoneBlock from "../header-phone-block/header-phone-block";
import HeaderButton from "../header-button/header-button";
import Bookmark from '../../images/Bookmark.svg';
import HeaderCart from "../header-cart/header-cart";

const HeaderMiddle: FC = () => {
    return (
        <Grid container alignItems='center' columnSpacing={2} paddingBottom={2.4}>
            <Grid item xs={12} md={3}><Logo/></Grid>
            <Grid item xs={12} md={3}><Search/></Grid>
            <Grid item xs={12} md={2}><HeaderPhoneBlock/></Grid>
            <Grid item container xs={12} md={4} alignItems='center' columnGap={1}>
                <HeaderButton image={Bookmark} link='#' />
                <HeaderCart />
            </Grid>
        </Grid>
    );
}

export default HeaderMiddle;