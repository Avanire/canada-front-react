import React, {FC} from "react";
import Product from "../product/product";
import {Link} from "react-router-dom";
import {IProduct} from "../../utils/types";

interface IMainProduct {
    heading: string;
    linkStock: string;
    products: Array<IProduct>;
}

const MainProduct: FC<IMainProduct> = ({heading, linkStock, products}) => {

    return (
        <section className={`mb-20`}>
            <div className={`flex justify-between items-center mb-8`}>
                <h3>{heading}</h3>
                <Link to='#'>{linkStock}</Link>
            </div>
            <div className={`flex flex-wrap gap-8`}>{products.map(item => <Product key={item.id} {...item} />)}</div>
        </section>
    );
}

export default MainProduct