import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelMenu} from "../../models/menu";
import MainCategory from "../main-category/main-category";
import {Grid} from "@mui/material";

const MainCategories: FC = () => {
    const categories = useStore(modelMenu.$categories);

    useEffect(() => {
        modelMenu.categoryRequest('categories');
    }, []);

    return (
        <>
            <h2>Товары по питомцу</h2>
            <Grid container columnGap={3} justifyContent='space-between'>
                {categories.map(item => <MainCategory name={item.title} link={item.url} children={item.children} key={item.id}/>)}
            </Grid>
        </>
    );
}

export default MainCategories;