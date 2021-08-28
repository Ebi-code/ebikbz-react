import React from 'react';
import Progress from "../../../components/Progress/Progress";
import { useStore } from "../../../hooks-store/store";

import classes from './Skill.module.css';

const Skill = props => {
    const state = useStore()[0].skills;
    let attachedCleass = [classes.Skill, props.newClass].join(" ");

    return (
        <React.Fragment>
            {state.map((items, itemIndex) => (
                <div key={itemIndex} className={attachedCleass}>
                    {items.map((skill, index) => {
                        const skillValue = 100 - skill.value;
                        return (
                            <Progress

                                key={skill.id + index}
                                id={skill.id}
                                styleClass={classes.Progress}
                                value={skillValue}
                                isCenter={skill.isCenter}>
                                {skill.icon && !skill.isCenter && < img src={skill.icon} alt="icon" />}
                                {skill.isCenter && <h2 className={classes.Value}>{`${skill.value}%`}</h2>}
                                {skill.showText && <h3 className={classes.Type}>{skill.type}</h3>}
                            </Progress>
                        )
                    })}
                </div>
            ))}
        </React.Fragment >
    )
};

export default Skill;

