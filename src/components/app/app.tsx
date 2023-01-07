import React, {FC} from "react";
import '../../models/init';
import AppHeader from "../app-header/app-header";
import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/home-page/home-page";

const App: FC = () => {
    return (
        <>
            <AppHeader/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
            </Routes>
        </>
    );
}

export default App;