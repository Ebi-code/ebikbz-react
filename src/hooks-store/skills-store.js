import { initStore } from "./store";

import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import sass from '../assets/images/sass.png';
import react from '../assets/images/react.png';
import redux from '../assets/images/redux.png';
import wordpress from '../assets/images/wordpress.png';
import github from '../assets/images/github.png';

const configureSkill = () => {

    const initialState = {
        first: [{ type: "html", icon: html, value: 100, isCenter: false, id: "s1" }],
        top: [
            { type: "css", icon: css, value: 100, isCenter: false, id: "s2" },
            { type: "sass", icon: sass, value: 70, isCenter: false, id: "s3" }
        ],
        middle: [
            { type: "react", icon: react, value: 75, isCenter: false, id: "s4" },
            { type: "github", icon: github, value: 60, isCenter: false, id: "s5" },
        ],
        bottom: [
            { type: "redux", icon: redux, value: 70, isCenter: false, id: "s6" },
            { type: "wordpress", icon: wordpress, value: 60, isCenter: false, id: "s7" }
        ],
        last: [{ type: "javascript", icon: js, value: 80, isCenter: false, id: "s8" }]
    }

    const skillsGroup = [];
    for (const keys in initialState) {
        skillsGroup.push(initialState[keys]);
    }

    const actions = {
        SHOW_CENTER_SKILL: (currState, skillId) => {
            const currentState = currState.skills;
            const skillsArray = currentState.reduce((accu, curr) => accu.concat(curr));
            const skillIndex = skillsArray.findIndex(({ id }) => id === skillId);
            const newIsCenter = !skillsArray[skillIndex].isCenter;
            const updateSkills = [...skillsArray];
            let updateSkill = updateSkills[skillIndex];
            const updateState = [...currentState];

            updateSkill = {
                ...skillsArray[skillIndex],
                isCenter: newIsCenter
            };

            for (const skill in updateState) {
                for (const sk in updateState[skill]) {
                    if (updateState[skill][sk].id === updateSkill.id) {
                        updateState[skill][sk] = updateSkill;
                    }
                }
            };

            updateState[2] = [
                updateState[2][0],
                {
                    type: updateSkill.type,
                    value: updateSkill.value,
                    isCenter: !updateSkill.isCenter,
                    id: updateSkill.id,
                    showText: true,
                },
                updateState[2][1]
            ];
            return { skills: updateState };
        },

        HIDE_CENTER_SKILL: () => {
            for (const keys in skillsGroup) {
                for (const key in skillsGroup[keys]) {
                    skillsGroup[keys][key].isCenter = false;
                }
            }
            return { skills: skillsGroup }
        }
    };

    initStore(actions, { skills: skillsGroup });
};

export default configureSkill;