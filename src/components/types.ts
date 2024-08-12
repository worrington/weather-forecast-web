export type Option = {
  id: number;
  value: string;
}

export type TemperatureByTime = {
  temp_min: number;
  temp_max: number;
  temp: number;
  time: string;
  type: Climate,
  icon: string,
}

export type WeatherByDay = {
  day: string;
  temp_min: number;
  temp_max: number;
  temperatureByTime: TemperatureByTime[];
}

export enum Direction {
  Left = "left",
  Right = "right"
}

export const ClimateData = {
  Clear: {
    color: "#f2af7c",
    description_es: "Cielo despejado",
    description_en: "Clear sky"
  },
  Mist: {
    color: "#B0BEC5", 
    description_es: "Niebla",
    description_en: "Mist"
  },
  Snow: {
    color: "#E0F7FA",
    description_es: "Nieve",
    description_en: "Snow"
  },
  Thunderstorm: {
    color: "#4A148C",
    description_es: "Tormenta eléctrica",
    description_en: "Thunderstorm"
  },
  Clouds: {
    color:  "#6db5d5",
    description_es: "Nublado",
    description_en: "Clouds"
  },
  Rain: {
    color: "#0288D1",
    description_es: "Lluvia",
    description_en: "Rain"
  }
}

export enum Climate {
  Clear= "Clear",
  Clouds= "Clouds",
  Thunderstorm= "Thunderstorm",
  Rain= "Rain",
  Snow= "Snow",
  Mist= "Mist"
}

export interface SelectedCityProps {
  options: Option[];
  selectedCity: string;
  handleSelectedCity: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


export interface SliderButtonProps {
  icon: string;
  direction: Direction;
  scrollSlider: (direction: Direction) => void;
}