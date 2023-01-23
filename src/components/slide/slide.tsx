import React, {FC} from "react";
import {Link} from "react-router-dom";
import {ISlide} from "../../utils/types";
import {STORAGE_URL} from "../../utils/constans";
import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right.svg';

const Slide:FC<ISlide> = ({image, link, handleClickNext, handleClickPrev}) => {
    return (
        <section className={`relative w-full`}>
            <img src={`${STORAGE_URL}/${image}`} alt="" className={`w-full`}/>
            <div className={`absolute bottom-14 left-[60px] flex items-center`}>
                <Link to={link} className={`py-4 px-5 rounded-xl bg-[#fff] mr-9`}>Подробнее</Link>
                <button className={`rounded-full p-3 bg-indigo-200/20 mr-1`} onClick={handleClickPrev}><img src={arrowLeft} alt=""/></button>
                <button className={`rounded-full p-3 bg-indigo-200/20`} onClick={handleClickNext}><img src={arrowRight} alt=""/></button>
            </div>
        </section>
    );
}

export default Slide;