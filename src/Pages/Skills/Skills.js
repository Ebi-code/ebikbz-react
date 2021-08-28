import React from 'react';

import SectionContainer from '../../hoc/SectionContainer/SectionContainer';
import SingleRow from "../../hoc/SingleRow/SingleRow";
import Skill from "./Skill/Skill";
import classes from './Skills.module.css';

const Skills = () => {
    return (
        <SectionContainer newClass={classes.Skills}>
            <SingleRow newClass={classes.SingleRow}>
                <Skill newClass={classes.Skill} />
            </SingleRow>
        </SectionContainer>
    )
};

export default Skills;
