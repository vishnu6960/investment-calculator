import React, { useState } from 'react'
import Header from './components/header/Header'
import InputGroup from './components/input-group/InputGroup'
import Results from './components/results/Results';
import './App.css'

const App = () => {

  const [isCalculate, setIsCalculate] = useState(false)
  const [inputData, setInputData] = useState({
    initialInvestment: 5000,
    annualInvestment: 1000,
    interest: 6,
    duration: 2,
  });

  const isInputValid = inputData.duration >= 1

  const handleCalculate = () => {
    setIsCalculate(true)
  }

  const handleChange = (inputKey, newValue) => {
    setInputData((prevData) => {
      return {
        ...prevData,
        [inputKey]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <InputGroup inputData={inputData} onChange={handleChange} handleCalculate={handleCalculate} isInputValid={isInputValid} />
      {(isCalculate && isInputValid) && <Results inputData={inputData} />}
    </>
  )
}

export default App
