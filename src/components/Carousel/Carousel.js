import React from 'react';

import classes from "./Carousel.module.css";
import CarouselItem from "./CarouselItem/CarouselItem";
import { useStore } from "../../hooks-store/store";

const Carousel = () => {
    const state = useStore()[0];
    return (
        <div className={classes.Carousel}>
            <div className={classes.CarouselInner}>
                {state.carousel.map((item, index) => {
                    return (
                        <CarouselItem
                            key={item.id}
                            itemIndex={index + 1}
                            activeItem={state.activeItem}>
                            <img src={item.image} alt={item.title} />
                        </CarouselItem>
                    )
                })}
            </div>
        </div>
    )
};

export default Carousel;