import "./ResultsTable.scss";
import SavingsHeaderRow from "./SavingsHeaderRow";

export default function ResultsTable({ inputs }) {
  const {
    initialEnergyConsumption,
    percentageReductionInConsumption,
    electricityCost,
    term,
  } = inputs;

  return (
    <table className="results-table">
      <thead>
        <tr>
          <th className="title">Miesiąc</th>
          <th className="title">Oszczędność (w kWh)</th>
          <th className="title">Oszczędność finansowa (w zł)</th>
          <th className="title">Suma oszczędności finansowych</th>
          <th className="title">Suma zużytej energii</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(term)].map((_, i) => (
          <SavingsHeaderRow
            key={i}
            monthIndex={i}
            initialEnergyConsumption={initialEnergyConsumption}
            percentageReductionInConsumption={percentageReductionInConsumption}
            electricityCost={electricityCost}
          />
        ))}
      </tbody>
    </table>
  );
}
