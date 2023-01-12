import React, {FC} from "react";
import MainCategories from "../../components/main-categories/main-categories";
import Stock from "../../components/stock/stock";

const HomePage: FC = () => {
    return (
        <main className={`container mx-auto`}>
            <MainCategories/>
            <Stock/>
        </main>
    );
}

export default HomePage;