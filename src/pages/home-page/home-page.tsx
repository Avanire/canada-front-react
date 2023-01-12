import React, {FC} from "react";
import MainCategories from "../../components/main-categories/main-categories";
import Stock from "../../components/stock/stock";
import MainBanner from "../../components/main-banner/main-banner";

const HomePage: FC = () => {
    return (
        <main className={`container mx-auto`}>
            <MainCategories/>
            <Stock/>
            <MainBanner/>
        </main>
    );
}

export default HomePage;