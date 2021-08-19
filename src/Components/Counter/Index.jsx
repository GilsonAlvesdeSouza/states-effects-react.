import React, { useState } from 'react';
import { ButtonDecremento, ButtonIncremento, Buttons, Contador } from './styles';

export const Counter = () => {
    const [state, setState] = useState(0);

    const incremento = () => {
        setState(state + 1);
    }

    const decremento = () => {
        if (state > 0) setState(state - 1);
    }

    return (
        <Contador>
            <h1>{state}</h1>
            <Buttons>
                <ButtonIncremento onClick={incremento}>Incremento</ButtonIncremento>
                <ButtonDecremento onClick={decremento}>Decremento</ButtonDecremento>
            </Buttons>
        </Contador>
    );
}

export default Counter;