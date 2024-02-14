import "./App.scss";
import Header from "./components/Header/Header";
import DataEntryForm from "./components/DataEntryForm";

function App() {
  return (
    <div className="App">
      <Header />
      <DataEntryForm
        initialEnergyConsumption={3000}
        percentageReductionInConsumption={10}
        electricityCost={1.5}
        term={12}
      />
    </div>
  );
}

export default App;
