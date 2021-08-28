import React from 'react'
import classes from "./CarouselIndicator.module.css";
import { useStore } from "../../../../hooks-store/store";

const CarouselIndicator = React.memo(props => {
    const dispatch = useStore(false)[1];

    const activeItemHandler = () => {
        dispatch("ACTIVE_INDICATOR", props.indicatorIndex);
    }
    return (
        <li
            className={props.indicatorIndex === props.activeItem ? [classes.Indicator, classes.Active].join(" ") : classes.Indicator}
            onClick={activeItemHandler}>
        </li>
    )
});

export default CarouselIndicator;
