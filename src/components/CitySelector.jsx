import React, { useState, useEffect } from 'react';
import { getCities } from '../api';

const CitySelector = ({ onCitySelect }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const citiesData = await getCities();
      setCities(citiesData);
    };
    fetchCities();
  }, []);

  return (
    <select onChange={(e) => onCitySelect(e.target.value)}>
      <option value="">Şehir Seçin</option>
      {cities.map((city) => (
        <option key={city.plaka} value={city.plaka}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
