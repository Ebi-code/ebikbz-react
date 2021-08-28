import React, { useEffect, useState } from 'react';
import classes from "./Wave.module.css";

const Wave = props => {

    const attachClass = [classes.Wave, props.newClass].join(" ");
    const [pathLine, setPathLine] = useState(
        "M 0 20 Q 15 0, 30 20  Q 45 40, 60 20 Q 75 0, 90 20 Q 105 40, 120 20 Q 135 0, 150 20 Q 165 40, 180 20"
    );

    useEffect(() => {
        let arr = [
            "M 0 20 Q 15 0, 30 20  Q 45 40, 60 20 Q 75 0, 90 20 Q 105 40, 120 20 Q 135 0, 150 20 Q 165 40, 180 20",
            "M 0 20 Q 15 40, 30 20  Q 45 0, 60 20 Q 75 40, 90 20 Q 105 0, 120 20 Q 135 40, 150 20 Q 165 0, 180 20"
        ];

        const timer = setInterval(() => {
            let num = Math.floor(Math.random() * 2);

            num === 0 ? setPathLine(arr[0]) : setPathLine(arr[1])

        }, 2000);

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className={attachClass}>
            <svg width="100%" height="100%">
                <path d={pathLine} stroke='#000' fill='transparent' />
            </svg>
        </div>
    )
}

export default Wave;
