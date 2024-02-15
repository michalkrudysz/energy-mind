import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import DataEntryForm from "./components/DataEntryForm";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [inputs, setInputs] = useState({
    initialEnergyConsumption: 350,
    percentageReductionInConsumption: 10,
    electricityCost: 1.5,
    term: 12,
  });

  const handleInputChange = (name, value) => {
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <Header />
      <DataEntryForm inputs={inputs} handleInputChange={handleInputChange} />
      <ResultsTable inputs={inputs} />
    </div>
  );
}

export default App;
