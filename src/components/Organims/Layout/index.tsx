"use client";

import { useEffect, useMemo, useState } from "react";

import SelectedCity from "@/components/Molecules/SelectedCity";
import { WeatherByDay, Option, TemperatureByTime } from "@/components/types";

import { fetchCities } from "@/services/reservamosApi";
import { fetchWatherByCity } from "@/services/openWeatherApi";
import { City, WeatherData } from "@/services/types";
import WeatherCard from "../WeatherCard";

export default function Layout() {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [citiesData, setCitiesData] = useState<City[]>([]);
  const [weatherData, setWeatherData] = useState<WeatherData>();

  // Handle city selection
  const handleSelectedCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  // Get city geolocation by selected city name
  const getCityGeolocation = (selectedCity: string) => {
    return citiesData.find(city => city.display === selectedCity);
  };

  // Memoized options for cities dropdown
  const optionsCities: Option[] = useMemo(() => {
    return citiesData.map(({ id, display }) => ({ id, value: display }));
  }, [citiesData]);

  // Group by day
  const weatherByDay: WeatherByDay[] = useMemo(() => {
    if (!weatherData) return [];
  
    const grouped: { [key: string]: TemperatureByTime[] } = {};
  
    weatherData.list.forEach(item => {
      const [date, time] = item.dt_txt.split(' ');
  
      if (!grouped[date]) {
        grouped[date] = [];
      }
  
      grouped[date].push({
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max,
        temp: item.main.temp,
        type: item.weather[0].main,
        icon: item.weather[0].icon,
        time,
      });
    });
  
    return Object.keys(grouped).map(day => {
      const temperatures = grouped[day];
  
      const temp_min = Math.min(...temperatures.map(temp => temp.temp_min));
      const temp_max = Math.max(...temperatures.map(temp => temp.temp_max));
  
      return {
        day,
        temperatureByTime: temperatures,
        temp_min,
        temp_max
      };
    });
  }, [weatherData]);
  
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
    <div className="p-8 h-lvh">
      <h1 className="py-10 text-2xl">Clima</h1>
      <SelectedCity
        options={optionsCities}
        handleSelectedCity={handleSelectedCity}
        selectedCity={selectedCity}
      />
      <div className="w-full pt-12">
        {
         selectedCity && <p>Haga click en un día para conocer más detalles sobre el clima.</p>
        }
        {
         selectedCity && weatherByDay.map(weatherData  => <WeatherCard key={weatherData.day} weatherData={weatherData} />)
        }
      </div>
    </div>
  );
}
