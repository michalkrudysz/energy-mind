import "./DataEntryForm.scss";

export default function DataEntryForm({
  initialEnergyConsumption,
  percentageReductionInConsumption,
  electricityCost,
  term,
}) {
  return (
    <div className="data-entry-form">
      <div className="input-section">
        <div className="input">
          <span>Początkowe zużycie energii</span>
          <span className="subtext">(kWh/miesiąc)</span>
          <input
            type="number"
            min="1"
            max="30000"
            placeholder={initialEnergyConsumption}
          ></input>
        </div>

        <div className="input">
          <span>Procentowa redukcja zużycia</span>
          <span className="subtext">(w procentach)</span>
          <input
            type="number"
            min="0"
            max="100"
            placeholder={percentageReductionInConsumption}
          ></input>
        </div>
      </div>

      <div className="input-section">
        <div className="input">
          <span>Koszt energii elektrycznej</span>
          <span className="subtext">(za kWh w złotówkach)</span>
          <input
            type="number"
            min="0.1"
            max="100"
            id="electricity-cost"
            placeholder={electricityCost}
          ></input>
        </div>
        <div className="input">
          <span>Okres</span>
          <span className="subtext">(w miesiącach)</span>
          <input
            type="number"
            min="1"
            max="12"
            id="term"
            placeholder={term}
          ></input>
        </div>
      </div>
    </div>
  );
}
