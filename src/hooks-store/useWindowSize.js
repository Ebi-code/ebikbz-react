import { useState, useEffect } from 'react'

const useWindowSize = () => {
    const isScreen = window !== "undefined";

    const [windowSize, setWindowSize] = useState({
        width: isScreen ? window.innerWidth : 1400,
        height: isScreen ? window.innerHeight : 800
    })

    useEffect(() => {
        const windowSizeHandler = () => setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })

        window.addEventListener("resize", windowSizeHandler);
        return () => window.removeEventListener("resize", windowSizeHandler);
    }, []);

    return windowSize;
}

export default useWindowSize;