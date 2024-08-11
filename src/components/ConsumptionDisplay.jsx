// ConsumptionDisplay.jsx
import React from 'react';

const ConsumptionDisplay = ({ consumption }) => {
  return (
    <div className="consumption-display">
      Tahmini Tüketim: {consumption} kWh
    </div>
  );
};

export default ConsumptionDisplay;
