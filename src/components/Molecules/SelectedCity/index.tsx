"use client";

import { Option } from '@/components/types';

interface SelectedCityProps {
  options: Option[];
  selectedCity: string;
  handleSelectedCity: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectedCity({ options, selectedCity, handleSelectedCity }: SelectedCityProps) {
  return (
    <div className="w-64">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">Select a city</label>
      <select
        id="city"
        name="city"
        className="mt-1 block w-full pl-3 pr-10"
        value={selectedCity}
        onChange={handleSelectedCity}
      >
        {options.map((city) => (
          <option key={city.id} value={city.value}>
            {city.value}
          </option>
        ))}
      </select>
    </div>
  );
}
