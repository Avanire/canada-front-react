import React, {FC, SyntheticEvent, useEffect, useState} from "react";
import {useStore} from "effector-react";
import {modelSliders} from "../../models/sliders";
import Slide from "../slide/slide";

const MainSlider: FC = () => {
    const sliders = useStore(modelSliders.$sliders);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect(() => {
        modelSliders.slidersRequest();
    }, []);

    const handleClickPrev = (e: SyntheticEvent) => {
        e.preventDefault();

        if (currentSlide - 1 >= 0) {
            setCurrentSlide((prevState) => prevState - 1);
        } else {
            setCurrentSlide(() => sliders.length - 1);
        }
    }

    const handleClickNext = (e: SyntheticEvent) => {
        e.preventDefault();

        if (currentSlide + 1 < sliders.length) {
            setCurrentSlide((prevState) => prevState + 1);
        } else {
            setCurrentSlide(() => 0);
        }
    }

    return (
        <section className={`mb-32 flex justify-center`}>
            {sliders.length ? (<Slide {...sliders[currentSlide]} handleClickNext={handleClickNext} handleClickPrev={handleClickPrev}/>) : null}
        </section>
    );
}

export default MainSlider;