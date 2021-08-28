import React from 'react';
import { LeftBar, RightBar } from "./styles";
import { useStore } from "../../hooks-store/store";
import shape from "../../assets/images/skill-shape.png";
import classes from './Progress.module.css';

const Progress = React.memo(props => {
    const dispatchShow = useStore(false)[1];
    const dispatchHide = useStore(false)[1];
    let attachedClass = [classes.Progress, props.styleClass].join(" ");


    const mouseEnterHandler = () => {
        dispatchShow("SHOW_CENTER_SKILL", props.id);
    }

    const mouseLeaveHandler = () => {
        dispatchHide("HIDE_CENTER_SKILL");
    }

    return (
        <div className={attachedClass}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            style={props.isCenter ? { background: `#000` } : null}>
            <div className={classes.ProgressBG}
                style={props.isCenter ? { backgroundImage: `url(${shape})` } : null}></div>
            <div className={classes.Inner}>
                {props.children}
            </div>
            {!props.isCenter &&
                <>
                    <RightBar />
                    <LeftBar skillValue={`${props.value}% 0%0% 0%`} />
                </>
            }
        </div>
    )
});

export default Progress;

