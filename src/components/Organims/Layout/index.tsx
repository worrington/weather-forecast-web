"use client";

import { useEffect, useMemo, useState } from "react";

import SelectedCity from "@/components/Molecules/SelectedCity";
import { Option } from "@/components/types";

import { formatDateTime } from "@/utils";

import { fetchCities } from "@/services/reservamosApi";
import { fetchWatherByCity } from "@/services/openWeatherApi";
import { City, WeatherData } from "@/services/types";

export default function Layout() {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [citiesData, setCitiesData] = useState<City[]>([]);
  const [weatherData, setWeatherData] = useState<WeatherData>();

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

  // Fetch weather data when selectedCity changes
  useEffect(() => {
    const getWeather = async () => {
      const cityGeolocation = getCityGeolocation(selectedCity);
      if (!cityGeolocation) return;

      try {
        const weatherData: WeatherData = await fetchWatherByCity(cityGeolocation.lat, cityGeolocation.long);
        setWeatherData(weatherData);
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    };

    if (selectedCity) {
      getWeather();
    }
  }, [selectedCity]);

  


  return (
    <div>
      <SelectedCity
        options={optionsCities}
        handleSelectedCity={handleSelectedCity}
        selectedCity={selectedCity}
      />
      {
        weatherData?.list.map((weather)=> (<>
        {console.log(weather)}
          <p>{formatDateTime(new Date(weather.dt_txt))}</p>
          {weather.main.temp_min} - {weather.main.temp_max}
          </>

        ))
      }
    </div>
  );
}
