import React from 'react';
import CarouselIndicator from "./CarouselIndicator/CarouselIndicator";
import { useStore } from "../../../hooks-store/store";
import classes from './CarouselIndicators.module.css';

const CarouselIndicators = props => {
    const indicatorState = useStore()[0];
    const attachClass = [classes.CarouselIndicators, props.newClass].join(" ");
    return (
        <ul className={attachClass}>
            {indicatorState.carousel.map((indicator, index) => {
                return <CarouselIndicator key={indicator.id} id={indicator.id} indicatorIndex={index + 1} activeItem={indicatorState.activeItem} />
            })}
        </ul>
    )
};

export default CarouselIndicators;
