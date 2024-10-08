"use client";

import { SelectedCityProps } from "@/components/types";

export default function SelectedCity({ options, selectedCity, handleSelectedCity }: SelectedCityProps) {
  return (
    <div className="w-64">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
        Selecciona un destino para conocer el clima
      </label>
      <select
        id="city"
        name="city"
        className="mt-1 block w-full pl-3 pr-10"
        value={selectedCity}
        onChange={handleSelectedCity}
      >
        <option value={""} disabled>
          Seleccione un destino...
        </option>
        {options.map((city) => (
          <option key={city.id} value={city.value}>
            {city.value}
          </option>
        ))}
      </select>
    </div>
  );
}
