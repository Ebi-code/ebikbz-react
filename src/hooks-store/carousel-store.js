import { initStore } from "./store";

import image1 from "../assets/images/ebi-1.png";
import image2 from "../assets/images/ebi-2.png";
import image3 from "../assets/images/ebi-3.png";

const configureCarousel = () => {
    let activeItem = 1;

    const initialState = [
        {
            image: image1,
            id: 1,
            showItem: true,
            title: "Image One",
            subTitle: "information Image"
        },
        {
            image: image2,
            id: 2,
            showItem: false,
            title: "Image Two",
            subTitle: "information Image"
        },
        {
            image: image3,
            id: 3,
            showItem: false,
            title: "Image Three",
            subTitle: "information Image"
        },
    ];

    const action = {
        ACTIVE_CAROUSEL: (currentState) => {

            if (activeItem !== currentState.carousel.length) {
                activeItem = activeItem + 1;
            } else if (activeItem === currentState.carousel.length) {
                activeItem = 1;
            }
            return { carousel: initialState, activeItem: activeItem }
        },
        ACTIVE_INDICATOR: (currentState, indicatorIndex) => {
            activeItem = indicatorIndex;
            return { carousel: initialState, activeItem: activeItem }
        }
    }
    initStore(action, { carousel: initialState, activeItem: activeItem })
}

export default configureCarousel;