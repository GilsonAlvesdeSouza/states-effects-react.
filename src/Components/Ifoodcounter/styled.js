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
`;

export const ButtonMinusActive = styled.button`
    border: none;
    background-color: transparent;
    height: 100%;
    font-size: large;
    color: red;
    cursor: pointer;
`;

export const ButtonMinusDesactive = styled.button`
    border: none;
    background-color: transparent;
    height: 100%;
    font-size: large;
    color: rgb(105,105,105);
    cursor: pointer;
`;