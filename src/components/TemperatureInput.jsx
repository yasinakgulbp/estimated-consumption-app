
import React from 'react';

const TemperatureInput = ({ temperature, setTemperature }) => {
  return (
    <input
      type="number"
      value={temperature}
      onChange={(e) => setTemperature(e.target.value)}
      placeholder="Sıcaklık değeri girin"
    />
  );
};

export default TemperatureInput;
