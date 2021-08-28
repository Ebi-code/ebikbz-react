import styled from "styled-components";

export const RightBar = styled.div`
    clip-path: inset(0% 0% 0% 0%);
    transform: rotate(-45deg) translate(68%, -58%);
    position: absolute;
    width: 100%;
    height: 150%;
    top: 50%;
    left: 50%;
    background-color: #f0ffff;
    animation: 2s linear forwards;
`;

export const LeftBar = styled.div`
    clip-path: ${props => props && `inset(${props.skillValue})`} ;
    transform: rotate(-45deg) translate(-66%, 60%);
    position: absolute;
    width: 100%;
    height: 150%;
    bottom: 50%;
    right: 50%;
    background-color: #f0ffff;
    animation: 2s linear forwards;
`;
