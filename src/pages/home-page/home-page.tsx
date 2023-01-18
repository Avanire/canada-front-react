import React, {FC, useEffect, useMemo} from "react";
import MainCategories from "../../components/main-categories/main-categories";
import MainBanner from "../../components/main-banner/main-banner";
import {useStore} from "effector-react";
import {modelProduct} from "../../models/products";
import {IProduct} from "../../utils/types";
import MainProduct from "../../components/main-product/main-product";
import {modelBanner} from "../../models/banner";
import {modelBrands} from "../../models/brand";
import ImageList from "../../components/image-list/image-list";
import Advantages from "../../components/advantages/advantages";
import MainSlider from "../../components/main-slider/main-slider";
import MainText from "../../components/main-text/main-text";
import MainArticles from "../../components/main-articles/main-articles";
import MainSubscription from "../../components/main-subscription/main-subscription";

const HomePage: FC = () => {
    const headingStock = 'Акции';
    const linkStock = '#';
    const headingPopular = 'Популярное';
    const linkPopular = 'Смотреть все';

    const bannerTop = useStore(modelBanner.$mainBannerTop);
    const bannerMid = useStore(modelBanner.$mainBannerMiddle);
    const products = useStore(modelProduct.$products);
    const brands = useStore(modelBrands.$brands);

    const stocksProduct = useMemo<Array<IProduct>>((): Array<IProduct> => {
        return products.filter(item => item.hit || item.new_product || item.old_price);
    }, [products]);

    const popularProduct = useMemo<Array<IProduct>>((): Array<IProduct> => {
        return products.filter(item => item.hit);
    }, [products]);

    const recommendedProduct = useMemo<Array<IProduct>>(() => {
        return products.filter(item => item.recommended);
    }, [products]);

    useEffect(() => {
        modelProduct.productRequest();
    }, []);

    useEffect(() => {
        modelBanner.mainBannerTopRequest('main-top');
        modelBanner.mainBannerMiddleRequest('main-middle');
    }, []);

    useEffect(() => {
        modelBrands.brandsRequest();
    }, []);

    return (
        <main className={`container mx-auto`}>
            <MainSlider/>
            <MainCategories/>
            <MainProduct heading={headingStock} linkStock={linkStock} products={stocksProduct}/>
            {bannerTop ? <MainBanner {...bannerTop} /> : null}
            <MainProduct heading={headingPopular} linkStock={linkPopular} products={popularProduct}/>
            {bannerMid ? <MainBanner {...bannerMid} /> : null}
            <ImageList heading='Популярные бренды' link='Все бренды' list={brands}/>
            <MainProduct heading='Рекомендуем вам' products={recommendedProduct}/>
            <MainText/>
            <Advantages/>
            <MainArticles/>
            <MainSubscription/>
        </main>
    );
}

export default HomePage;