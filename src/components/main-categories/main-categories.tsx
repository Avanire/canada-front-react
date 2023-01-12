import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelMenu} from "../../models/menu";
import MainCategory from "../main-category/main-category";

const MainCategories: FC = () => {
    const categories = useStore(modelMenu.$categories);

    useEffect(() => {
        modelMenu.categoryRequest('categories');
    }, []);

    return (
        <>
            <h2 className={`mb-9`}>Товары по питомцу</h2>
            <div className={`flex flex-wrap justify-between gap-4 mb-20`}>
                {categories.map(item => <MainCategory name={item.title} link={item.url} children={item.children}
                                                      key={item.id}/>)}
            </div>
        </>
    );
}

export default MainCategories;