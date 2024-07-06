import { ChangeEvent, useState } from 'react';
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input';


function App() {

  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const handleChangeInput1 = (event: ChangeEvent<HTMLInputElement>)=>{
    setNumber1(Number(event.target.value));
  }

  const handleChangeInput2 = (event: ChangeEvent<HTMLInputElement>)=>{
    setNumber2(Number(event.target.value));
  }

  const handleAddNumbers = () =>{
    setResult(number1+number2);
  }

  const handleSubtractNumber = () =>{
    setResult(number1-number2);
  }

  const handleMultiply = () =>{
    setResult(number1*number2);
  }

  const handleDivide = () =>{
    setResult(number1/number2);
  }

  return (
    <div className='main'>
      <div className='inputOutput'>
        <div className='inputs'>
          <Input label='Número 1' name='numero1' onChange={handleChangeInput1}/>
          <Input label='Número 2' name='numero2' onChange={handleChangeInput2}/>
        </div>
        <div className='resultado'>
          <p>Resultado</p>
          <span>{result}</span>
        </div>
        </div>
        <div className='buttonSection'>
          <Button onClick={handleAddNumbers}>Adição</Button>
          <Button onClick={handleSubtractNumber}>Subtração</Button>
          <Button onClick={handleMultiply}>Multiplicação</Button>
          <Button onClick={handleDivide}>Divisão</Button>
        </div>
    </div>
  );
}

export default App;
