import React, { useState } from 'react'
import { ButtonMinusActive, ButtonMinusDesactive, ButtonPlusActive, Wrapper } from './styled';

export const IfoodCounter = () => {
    const [value, setValue] = useState(0);

    const incremento = () => {
        setValue(value + 1);
    }

    const decremento = () => {
        if (value > 0) setValue(value - 1);
    }

    const AtivarDesativarMinus = (value) => {
        if (value > 0) {
            return <ButtonMinusActive onClick={decremento}> - </ButtonMinusActive>;
        }
        return <ButtonMinusDesactive> - </ButtonMinusDesactive>;
    };

    return (
        <Wrapper>
            <ButtonPlusActive onClick={incremento}>+</ButtonPlusActive>
            <p>{value}</p>
            {/* 2 formas de se fazer */}
            {/* {value < 1 ? <ButtonMinusDesactive>-</ButtonMinusDesactive> : <ButtonMinusActive onClick={decremento}>-</ButtonMinusActive>} */}
            {AtivarDesativarMinus(value)}
        </Wrapper>
    )
}

export default IfoodCounter;
