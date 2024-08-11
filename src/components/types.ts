export type Option = {
  id: number;
  value: string;
}

export type TemperatureByTime = {
  temp_min: number;
  temp_max: number;
  time: string;
}

export type GroupedWeather = {
  day: string;
  temperatureByTime: TemperatureByTime[];
}

export interface SelectedCityProps {
  options: Option[];
  selectedCity: string;
  handleSelectedCity: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

  