import { Climate } from "@/components/types";

type City = {
  city_slug: string | number | readonly string[] | undefined;
  display: string;
  id: number;
  city_name: string;
  state: string;
  country: string;
  lat: string;
  long: string;
  result_type: string;
}
  
type WeatherData = {
  list: {
    dt_txt: string;
    main: {
      temp_max: number;
      temp_min: number;
      temp: number;
    };
    weather: {
        main: Climate,
        icon: string
    }[],
  }[];
}

export type {
  City,
  WeatherData
}
