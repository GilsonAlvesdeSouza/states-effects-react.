import React, { useState } from 'react'
import { ButtonMinusActive, ButtonPlusActive, Value, Wrapper } from './styles';

export const IfoodCounter = () => {
    const [value, setValue] = useState(0);
    const [colorValue, setcolorValue] = useState('');
    const [colorMinus, setcolorMinus] = useState('');

    const incremento = () => {
        setValue(value + 1);
        setcolorValue('blue');
        setcolorMinus('red');
    }

    const decremento = () => {
        if (value > 0) {
            setValue(value - 1);
        }
        if (value <= 1) {
            setcolorValue('rgb(105,105,105)');
            setcolorMinus('rgb(105,105,105)');
        }
    }

    return (
        <Wrapper>
            <ButtonPlusActive onClick={incremento}>+</ButtonPlusActive>
            <Value color={colorValue}>{value}</Value>
            <ButtonMinusActive color={colorMinus} onClick={decremento}>-</ButtonMinusActive>
        </Wrapper>
    )
}

export default IfoodCounter;
