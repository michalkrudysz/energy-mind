export default function SavingsHeaderRow({
  monthIndex,
  initialEnergyConsumption,
  percentageReductionInConsumption,
  electricityCost,
}) {
  const savedEnergy =
    initialEnergyConsumption * (percentageReductionInConsumption / 100);
  const financialSavings = savedEnergy * electricityCost;
  const totalEnergyConsumed = initialEnergyConsumption - savedEnergy;

  return (
    <tr>
      <td>{monthIndex + 1}</td>
      <td>{savedEnergy.toFixed(2)}</td>
      <td>{financialSavings.toFixed(2)}</td>
      <td>{(financialSavings * (monthIndex + 1)).toFixed(2)}</td>
      <td>{(totalEnergyConsumed * (monthIndex + 1)).toFixed(2)}</td>
    </tr>
  );
}
