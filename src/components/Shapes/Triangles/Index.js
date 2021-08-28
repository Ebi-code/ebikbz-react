import React, { useState, useEffect } from 'react';
import classes from "./Index.module.css";

const Triangles = props => {
    const attachClass = [classes.Triangles, props.newClass].join(" ");
    let arr = Array.from({ length: 5 });
    const [triangleType, setTriangleType] = useState(arr.length);

    useEffect(() => {
        const timer = setInterval(() => {
            if (triangleType !== 1) {
                setTriangleType(triangleType - 1)
            } else if (triangleType === 1) {
                setTriangleType(arr.length)
            }
        }, 700)

        return () => {
            clearInterval(timer)
        }
    }, [arr.length, triangleType]);

    return (
        <div className={attachClass}>
            {arr.map((item, index) => (
                triangleType === index + 1 ? <span key={index} className={classes.Fill}></span> :
                    <span key={index} className={classes.Stroke}></span>
            ))
            }
        </div>
    )
}

export default Triangles
