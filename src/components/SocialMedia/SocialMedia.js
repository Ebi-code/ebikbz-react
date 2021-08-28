import React from 'react';
import github from "../../assets/images/github-icon.png";
import stackoverflow from "../../assets/images/stackoverflow.png";
import linkedin from "../../assets/images/linkedin.png";
import skype from "../../assets/images/skype.png";
import Media from "./Media/Media";

import classes from "./SocialMedia.module.css";

const SocialMedia = () => {

    const socialmedias = [
        {
            image: stackoverflow,
            name: "stackoverflow",
            link: "https://stackoverflow.com/users/11493934/ebrahim-khakbiz"
        },
        {
            image: linkedin,
            name: "linkedin",
            link: "https://www.linkedin.com/in/ebrahim-khakbiz-386bb1186/"
        },
        {
            image: skype,
            name: "skype",
            link: "https://join.skype.com/invite/nZcVYdtfqtqh"
        },
        {
            image: github,
            name: "github",
            link: "https://github.com/Ebi-code"
        },
    ];

    return (
        <ul className={classes.SocialMedia}>
            {socialmedias.map((item, index) => (
                <Media
                    key={index}
                    src={item.image}
                    alt={item.link}
                    link={item.link}
                    socialName={item.name} />
            ))}
        </ul>
    )
}

export default SocialMedia
