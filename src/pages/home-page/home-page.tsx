import React, {FC} from "react";
import MainCategories from "../../components/main-categories/main-categories";
import {Container} from "@mui/material";

const HomePage: FC = () => {
    return (
        <Container>
            <MainCategories/>
        </Container>
    );
}

export default HomePage;