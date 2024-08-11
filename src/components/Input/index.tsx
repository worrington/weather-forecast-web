"use client"; // Marca este componente como un componente de cliente

import { fetchCities } from '@/services/reservamosApi';
import { City } from '@/services/types';
import { useEffect, useMemo, useState } from 'react';

export default function CitySelector() {

  const [citiesData, setCitiesData] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');

  useEffect(() => {
    async function getCities() {
      try {
        const data = await fetchCities(); 
        setCitiesData(data); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error('Failed to fetch cities:', error);
      }
    }

    getCities(); 
  }, []);


  return (
    <div className="w-64">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">Select a city</label>
      <select
        id="city"
        name="city"
        className="mt-1 block w-full pl-3 pr-10"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {citiesData.map((city) => (
          <option key={city.id} value={city.city_slug}>
            {city.display}
          </option>
        ))}
      </select>
    </div>
  );
}
