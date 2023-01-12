import React, {FC} from "react";
import {IProduct} from "../../utils/types";
import {RUB, STORAGE_URL} from "../../utils/constans";
import styles from './product.module.css';
import {Link} from "react-router-dom";
import Bookmark from "../../images/Bookmark.svg";
import HeaderButton from "../header-button/header-button";
import Button from "../button/button";

const Product: FC<IProduct> = ({
                                   image,
                                   rating,
                                   count_rating,
                                   name,
                                   alias,
                                   brand,
                                   price,
                                   old_price,
                                   hit,
                                   new_product
                               }) => {


    return (
        <section className={`basis-72 flex-grow`}>
            <Link to={alias} className={`${styles.imageBlock} block mb-3 hover:no-underline`}>
                <div className={`absolute top-2 left-2 flex gap-1`}>
                    {old_price ? (
                        <span className={styles.tips}>{Math.round(100 - (100 * (price / old_price)))}%</span>) : ""}
                    {hit ? (<span className={styles.tips}>Хит</span>) : ""}
                    {new_product ? (<span className={styles.tips}>Новинка</span>) : ""}
                </div>
                <img src={STORAGE_URL + '/' + image} alt={name}/>
            </Link>
            <Link to={alias} className={`${styles.name} inline-block mb-1.5 h-20 hover:no-underline`}>{name}</Link>
            <div className={`${styles.brand} mb-3`}>{brand}</div>
            <div className={`mb-3`}>
                {old_price ? (<><span className={`${styles.price} mr-2`}>{price} {RUB}</span> <span
                    className={`${styles.oldPrice} line-through`}>{old_price} {RUB}</span></>) : (
                    <span className={`${styles.price}`}>{price} {RUB}</span>)}
            </div>
            <div className={`flex`}>
                <Button name='В корзину' />
                <HeaderButton image={Bookmark} link='#'/>
            </div>
        </section>
    );
}

export default Product;