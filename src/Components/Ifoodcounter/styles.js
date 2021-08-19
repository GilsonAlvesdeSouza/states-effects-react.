import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 3px solid rgb(192,192,192);
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    width: 6%;
`;

export const ButtonPlusActive = styled.button`
    border: none;
    background-color: transparent;
    height: 100%;
    font-size: large;
    color: red;
    cursor: pointer;
    font-size: 1.2em;
`;

export const ButtonMinusActive = styled.button`
    border: none;
    background-color: transparent;
    height: 100%;
    font-size: large;
    color: ${props => props.color};
    cursor: pointer;
    font-size: 1.5em;
`;

export const Value = styled.p`
    color: ${props => props.color};
`;



