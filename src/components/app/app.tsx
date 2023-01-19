import React, {FC, useEffect} from "react";
import '../../models/init';
import AppHeader from "../app-header/app-header";
import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/home-page/home-page";
import AppFooter from "../app-footer/app-footer";
import {useStore} from "effector-react";
import {modelSetting} from "../../models/settings";

const App: FC = () => {
    const address = useStore(modelSetting.$address);

    useEffect(() => {
        modelSetting.addressRequest('address');
    }, []);

    return (
        <>
            <AppHeader address={address}/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
            <AppFooter address={address}/>
        </>
    );
}

export default App;