import Header from './Components/Header/Header.jsx';
import UserInput from './Components/UserInput.jsx';
import ResultsTable from './Components/ResultsTable.jsx'
import { useState } from "react";


function App() {
  const [userInput, setUserInput] =useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = userInput.duration >= 1;


function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue//+ for conversion from string to number
      };
  });
}

  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration greater then zero.</p>}
      {inputIsValid && <ResultsTable input={userInput}/>}
    </div>
  )
}

export default App
