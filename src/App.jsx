import React, { useState } from 'react';
import CitySelector from './components/CitySelector';
import TemperatureInput from './components/TemperatureInput';
import ConsumptionDisplay from './components/ConsumptionDisplay';
import { getCities, calculateConsumption } from './api';
import './App.css';

const App = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [consumption, setConsumption] = useState(null);

  const handleCitySelect = (plaka) => {
    setSelectedCity(plaka);
  };

  const handleCalculate = async () => {
    if (selectedCity && temperature) {
      const result = await calculateConsumption(selectedCity, parseInt(temperature));
      setConsumption(result);
    }
  };

  return (
    <div className="container">
      <h1>Tahmini Tüketim Uygulaması</h1>
      <CitySelector onCitySelect={handleCitySelect} />
      <TemperatureInput temperature={temperature} setTemperature={setTemperature} />
      <button onClick={handleCalculate}>Hesapla</button>
      {consumption && <ConsumptionDisplay consumption={consumption} />}
    </div>
  );
};

export default App;
