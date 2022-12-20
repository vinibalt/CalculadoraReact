import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { TitleContainer } from "./components/Title/styles";
import { useState } from "react";
import React from "react";


function App() {
const [currentNumber, setCurrentNumber] = useState('0');
const [firstNumber, setFirstNumber] = useState('0');
const [operation, setOperation] = useState('');

const handleClear = () => {
  setCurrentNumber('0');
  setFirstNumber('0')
  setOperation('')
};

const handleAddNumber = (num) => {
  setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
}

const handleSumNums = () => {
  if(firstNumber === '0'){
    setFirstNumber(currentNumber)
    setCurrentNumber('0');
    setOperation('+')
  } else {
    const sum = Number(firstNumber) + Number(currentNumber)
    setCurrentNumber(String(sum))
    setOperation('')
  }
}

const handleSubtractNums = () => {
  if(firstNumber === '0'){
    setFirstNumber(currentNumber)
    setCurrentNumber('0');
    setOperation('-')
  } else {
    const subtraction = Number(firstNumber) - Number(currentNumber)
    setCurrentNumber(String(subtraction))
    setOperation('')
  }
}

const handleMultiplyNums = () => {
  if(firstNumber === '0'){
    setFirstNumber(currentNumber)
    setCurrentNumber('0');
    setOperation('*')
  } else {
    const multiplication = Number(firstNumber) * Number(currentNumber)
    setCurrentNumber(String(multiplication))
    setOperation('')
  }
}

const handleDivideNums = () => {
  if(firstNumber === '0'){
    setFirstNumber(currentNumber)
    setCurrentNumber('0');
    setOperation('/')
  } else {
    const division = Number(firstNumber) / Number(currentNumber)
    setCurrentNumber(String(division))
    setOperation('')
  }
}

const handlePowNum = () => {
  if(firstNumber === '0'){
    setFirstNumber(currentNumber)
    setCurrentNumber('0');
    setOperation('pow')
  } else {
    const pow = Math.pow(Number(firstNumber), Number(currentNumber))
    setCurrentNumber(String(pow))
    setOperation('')
  }
}

const handlePercentNum = () => {
  if(firstNumber === '0'){
    setFirstNumber(currentNumber)
    setCurrentNumber('0');
    setOperation('pct')
  } else {
    if(operation === '+'){
      const pctp = Number(firstNumber) + (Number(firstNumber) * (Number(currentNumber)/100))
      setCurrentNumber(String(pctp))
      setOperation('')
    } else if(operation === '-'){
      const pctm = Number(firstNumber) - (Number(firstNumber) * (Number(currentNumber)/100))
      setCurrentNumber(String(pctm))
      setOperation('')
    }
  }
}

const handleEqual = () => {
  if(firstNumber !== '0' && operation !== ''){
    switch(operation){
      case '+':
        handleSumNums();
        setOperation('')
        setFirstNumber('0')
        break;
      case '-':
        handleSubtractNums();
        setOperation('')
        setFirstNumber('0')
        break;
      case '*':
        handleMultiplyNums();
        setOperation('')
        setFirstNumber('0')
        break;
      case '/':
        handleDivideNums();
        setOperation('') 
        setFirstNumber('0')
        break;
      case 'pow':
        handlePowNum();
        setOperation('')
        setFirstNumber('0')
        break;
      case 'pct':
        handlePercentNum();
        setOperation('')
        setFirstNumber('0')
        break;
      default: break;
    }
  }
}


  return (<>
    <TitleContainer>
        <h1>Calculadora</h1>
      </TitleContainer>
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handleClear}/>
          <Button label="%" onClick={handlePercentNum}/>
          <Button label="/" onClick={handleDivideNums}/>
          <Button label="xʸ" onClick={handlePowNum}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" onClick={handleMultiplyNums}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleSubtractNums}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNums}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber(',')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEqual}/>
        </Row>
      </Content>
    </Container>
  </>);
}

export default App;
