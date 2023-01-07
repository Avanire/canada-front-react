import React, {FC} from "react";
import {IMenu} from "../../utils/types";
import {Grid, Link} from "@mui/material";
import styles from './main-category.module.css'

interface IMainCategory {
    name: string;
    link: string;
    children: Array<IMenu>;
}

const MainCategory: FC<IMainCategory> = ({name, link, children}) => {
    return (
        <Grid item xs={12} md={5.8} className={styles.category} padding={[4, 4, 5, 4]}>
            <h3><Link href={link}>{name}</Link></h3>
            <div className={styles.childrenLinks}>
                {children.map(item => <Link className={styles.link} key={item.id} href={item.url}>{item.title}</Link>)}
            </div>
        </Grid>
    );
}

export default MainCategory;