import React, {FC} from "react";
import HeaderTop from "../header-top/header-top";
import HeaderMiddle from "../header-middle/header-middle";
import MainMenu from "../main-menu/main-menu";

const AppHeader: FC<{address: string}> = ({address}) => {
    return (
        <header className={`mb-10`}>
            <div className={`container mx-auto`}>
                <HeaderTop address={address}/>
                <HeaderMiddle/>
                <MainMenu/>
            </div>
        </header>
    );
}

export default AppHeader;