import React, {FC, useEffect, useState} from "react";
import Product from "../product/product";
import {Link} from "react-router-dom";
import {IProduct} from "../../utils/types";
import styles from './main-product.module.css';
import nextBtn from '../../images/slide-next.svg';
import prevBtn from '../../images/slide-prev.svg';

interface IMainProduct {
    heading: string;
    linkStock?: string;
    products: Array<IProduct>;
    productToShow?: number;
}

const MainProduct: FC<IMainProduct> = ({heading, linkStock, products, productToShow = 5}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [length, setLength] = useState<number>(products.length);
    const [touchPosition, setTouchPosition] = useState<number | null>(null);
    const [show] = useState<number>(productToShow);

    useEffect(() => {
        setLength(products.length);
    }, [products]);

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            next();
        }

        if (diff < 5) {
            prev();
        }

        setTouchPosition(null);
    }

    return (
        <section className={`mb-20`}>
            <div className={`flex justify-between items-center mb-8`}>
                <h3>{linkStock ? <Link to={linkStock} className={`${styles.link}`}>{heading}</Link> : heading}</h3>
            </div>
            <div className={`flex w-full flex-col`}>
                <div className={`flex w-full relative`}>
                    <button className={`${styles.leftArrow} -left-5`} onClick={prev}><img src={prevBtn} alt=""/>
                    </button>
                    <div className={`overflow-hidden w-full h-full`}
                         onTouchStart={handleTouchStart}
                         onTouchMove={handleTouchMove}
                    >
                        <div className={`flex transition ease-linear delay-250 gap-1 ${styles['show' + show]}`}
                             style={{transform: `translateX(-${currentIndex * (100 / show)}%)`}}
                        >
                            {products.map(item => <Product key={item.id} {...item} />)}
                        </div>
                    </div>
                    <button className={`${styles.rightArrow} -right-5`} onClick={next}><img src={nextBtn} alt=""/>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MainProduct