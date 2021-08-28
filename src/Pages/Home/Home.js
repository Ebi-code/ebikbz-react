import React from 'react';
import Description from "../../components/Description/Description";
import classes from './Home.module.css';
import Lozenge from "../../components/Lozenge/Lozenge";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import Button from "../../components/UI/Button/Button";
import SingleRow from "../../hoc/SingleRow/SingleRow";
import Columns from "../../hoc/Columns/Columns";
import SectionContainer from "../../hoc/SectionContainer/SectionContainer";
import Carousel from "../../components/Carousel/Carousel";
import CarouselIndicators from "../../components/Carousel/CarouselIndicators/CarouselIndicators";
import { NavLink } from "react-router-dom";
import Triangles from "../../components/Shapes/Triangles/Index";
import Wave from "../../components/Shapes/Wave/Index";
import Multiple from "../../components/Shapes/Multiple/Index";
import Dots from "../../components/Shapes/Dots/Index";
import Lines from "../../components/Shapes/Lines/Index";
import Triangle from "../../components/Shapes/Triangle/Index";
import useWindowSize from "../../hooks-store/useWindowSize";

const Home = () => {
    const { width } = useWindowSize();
    return (
        <SectionContainer className="jsjs" newClass={classes.Home}>
            <SingleRow>
                <Columns>
                    {width > 992 &&
                        <div className={classes.ShapesHolder}>
                            <Wave newClass={classes.Wave} />
                            <Multiple newClass={classes.Multiple} />
                            <Triangle newClass={classes.Triangle} />
                        </div>
                    }
                    <div className={classes.LeftContentHolder}>
                        <Title topTitle="creative" bottomTitle="developer" />
                        <Description>
                            I`m Ebi Khakbiz Front-End Developer
                        </Description>
                        {width > 320 &&
                            <Text styleClass={classes.Text}>
                                <p>
                                    Web developer, professional in react JS. And also
                                    familiar with WordPress. Lively and interested in
                                    teamwork. Looking for advancement and gaining
                                    expertise in learning more web programming
                                </p>
                            </Text>
                        }
                        {width > 576 &&
                            <div className={classes.ButtonHolder}>
                                <Text newClass={classes.Text}><h3>see my skills</h3></Text>
                                <NavLink to="/skill">
                                    <Button>check my skills</Button>
                                </NavLink>
                            </div>
                        }
                    </div>
                </Columns>
                <Columns>
                    {width > 992 &&
                        <div className={classes.ShapesHolder}>
                            <Lines newClass={classes.Lines} />
                            <Triangles newClass={classes.Triangles} />
                            <Dots newClass={classes.Dots} />
                        </div>
                    }
                    {width > 576 &&
                        <div className={classes.ShapesHolder}>
                            <Dots newClass={classes.Dots} />
                        </div>
                    }
                    <div className={classes.RightContentHolder}>
                        <Lozenge newClass={classes.Lozenge}>
                            <Carousel />
                        </Lozenge>
                        <CarouselIndicators newClass={classes.CarouselIndicators} />
                    </div>
                </Columns>
            </SingleRow>
        </SectionContainer >
    )
}

export default Home;
