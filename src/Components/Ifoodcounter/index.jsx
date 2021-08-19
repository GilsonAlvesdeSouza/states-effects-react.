import React, { useState } from 'react'
import { ButtonMinusActive, ButtonPlusActive, Value, Wrapper } from './styles';

export const IfoodCounter = () => {
    const valorProduto = 15.85;
    const [value, setValue] = useState(0);
    const [colorValue, setcolorValue] = useState('');
    const [colorMinus, setcolorMinus] = useState('');
    const [valorTotal, setValorTotal] = useState(0);

    const incremento = () => {
        setValue(value + 1);
        setcolorValue('blue');
        setcolorMinus('red');
        setValorTotal(valorTotal + valorProduto);
    }

    const decremento = () => {
        if (value > 0) {
            setValue(value - 1);
            setValorTotal(valorTotal - valorProduto);
        }
        if (value <= 1) {
            setcolorValue('rgb(105,105,105)');
            setcolorMinus('rgb(105,105,105)');
        }
    }

    return (
        <>
            <Wrapper>
                <ButtonPlusActive onClick={incremento}>+</ButtonPlusActive>
                <Value color={colorValue}>{value}</Value>
                <ButtonMinusActive color={colorMinus} onClick={decremento}>-</ButtonMinusActive>
            </Wrapper>
            <h4>Valor total dos produtos: {valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>

        </>
    )
}

export default IfoodCounter;
