import React from 'react';
import classes from './About.module.css';
import SectionContainer from '../../hoc/SectionContainer/SectionContainer';
import SingleRow from '../../hoc/SingleRow/SingleRow';
import Lozenge from '../../components/Lozenge/Lozenge';
import Title from '../../components/Title/Title';
import Description from "../../components/Description/Description";
import Text from "../../components/Text/Text";
import image from "../../assets/images/ebi-1.png";
import Columns from "../../hoc/Columns/Columns";
import Triangles from "../../components/Shapes/Triangles/Index";
import useWindowSize from "../../hooks-store/useWindowSize";

const About = props => {
    const { width } = useWindowSize();
    return (
        <SectionContainer newClass={classes.About}>
            <SingleRow newClass={classes.SingleRow}>
                <Columns>
                    <div className={classes.LeftContentHolder}>
                        {width > 380 && <Title topTitle="about" bottomTitle="me" newClass={classes.Title} />}
                        <Description newClass={classes.Description}>
                            ebi Khakbiz
                        </Description>
                        <Text newClass={classes.Text}>
                            <p>
                                <b>Front-end developer</b>
                                , with great attention to UI/UX design.
                                Specialize in building cross-browser compatible web user
                                interfaces using style guide development approach and components standardization.
                                <br />
                                I am passionate about elegant user interfaces,
                                resolving usability issues,
                                and prototype user testing.
                                Excited about designing and developing the product,
                                considering tons of UX peculiarities,
                                <br />
                                and using innovative technologies.
                                Enjoy working side by side with professionals,
                                <br />
                                share experience, and putting into practice the latest technology and trends - thus we evolve much effectively,
                                <i> I believe</i>
                            </p>
                        </Text>
                    </div>
                </Columns>
                {width > 576 && <Columns>
                    <Lozenge newClass={classes.Lozenge} >
                        <img src={image} alt="about me amage" />
                    </Lozenge>
                    <Triangles newClass={classes.Triangles} />
                </Columns>
                }
            </SingleRow>
        </SectionContainer>
    )
}

export default About;
