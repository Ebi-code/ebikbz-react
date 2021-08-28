import React from 'react'
import TitleBG from "./TitleBG/TitleBG"
import TitleText from "./TitleText/TitleText"

const Title = props => {
    return (
        <TitleBG newClass={props.newClass} >
            <TitleText topTitle={props.topTitle} bottomTitle={props.bottomTitle} />
        </TitleBG>
    )
}

export default Title
