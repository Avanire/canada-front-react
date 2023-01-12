import React, {FC, useEffect, useMemo} from "react";
import {useStore} from "effector-react";
import {modelProduct} from "../../models/products";
import Product from "../product/product";
import {IProduct} from "../../utils/types";
import {Link} from "react-router-dom";

const Stock: FC = () => {
    const heading = 'Акции';
    const allStocks = 'Все акции';

    const products = useStore(modelProduct.$products);
    const stocksProduct = useMemo<Array<IProduct>>((): Array<IProduct> => {
        return products.filter(item => item.hit || item.new_product || item.old_price).slice(0, 4);
    }, [products]);


    useEffect(() => {
        modelProduct.productRequest();
    }, []);


    return (
        <section>
            <div className={`flex justify-between items-center mb-8`}>
                <h3>{heading}</h3>
                <Link to='#'>{allStocks}</Link>
            </div>
            <div className={`flex flex-wrap gap-8`}>{stocksProduct.map(item => <Product key={item.id} {...item} />)}</div>
        </section>
    );
}

export default Stock