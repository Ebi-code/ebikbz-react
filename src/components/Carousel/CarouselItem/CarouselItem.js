import React, { useEffect } from 'react';
import classes from "./CarouselItem.module.css";

import { useStore } from "../../../hooks-store/store";

const CarouselItem = React.memo(props => {
    const attachedClass = [classes.CarouselItem, classes.Active].join(" ");

    const dispatch = useStore(false)[1];

    useEffect(() => {
        const showCarousel = setInterval(() => {
            dispatch("ACTIVE_CAROUSEL");
        }, 5000)
        return () => {
            clearInterval(showCarousel);
        }
    }, [dispatch, props.children.ref])

    return (
        <div className={props.activeItem === props.itemIndex ? attachedClass : classes.CarouselItem}>
            {props.children}
        </div >
    )
});

export default CarouselItem;