import styled from "styled-components";

export const Contador = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Buttons = styled.div`
    display: flex;
`;

export const ButtonIncremento = styled.button`
    margin: 5px;
    background-color: greenyellow;
    color: black;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 3px 3px 3px black;
    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const ButtonDecremento = styled.button`
    margin: 5px;
    background-color: red;
    color: white;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 3px 3px 3px black;
    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;