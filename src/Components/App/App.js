import React from 'react';
import './App.css';
import { Container } from './styles';
import { IfoodCounter } from '../Ifoodcounter/index';

function App() {
  return (
    <Container>
      <h1>Food</h1>
      <IfoodCounter></IfoodCounter>
    </Container>
  );
}

export default App;
