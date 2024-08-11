"use client";

import { useEffect, useMemo, useState } from "react";
import SelectedCity from "@/components/Molecules/SelectedCity";
import { fetchCities } from "@/services/reservamosApi";
import { City } from "@/services/types";
import { Option } from "@/components/types";

export default function Layout() {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [citiesData, setCitiesData] = useState<City[]>([]);
  const [weatherData, setWeatherData] = useState<any>(null);

  // Memoized options for cities dropdown
  const optionsCities: Option[] = useMemo(() => {
    return citiesData.map(({ id, display }) => ({ id, value: display }));
  }, [citiesData]);

  // Handle city selection
  const handleSelectedCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  // Get city geolocation by selected city name
  const getCityGeolocation = (selectedCity: string) => {
    return citiesData.find(city => city.display === selectedCity);
  };

  // Fetch cities on component mount
  useEffect(() => {
    const getCities = async () => {
      try {
        const data = await fetchCities();
        setCitiesData(data);
      } catch (error) {
        console.error('Failed to fetch cities:', error);
      }
    };

    getCities();
  }, []);

  return (
    <div>
      <SelectedCity
        options={optionsCities}
        handleSelectedCity={handleSelectedCity}
        selectedCity={selectedCity}
      />
    </div>
  );
}
