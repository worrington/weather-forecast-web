"use client";

import { WeatherByDay } from "@/components/types";
import { formatDateTime } from "@/utils";

export default function WeatherCard({ weather }: {weather: WeatherByDay}) {
  console.log(new Date(weather.day));

  return (
    <div className="col">
      <p>{formatDateTime(new Date(weather.day))}</p>
      {weather.temperatureByTime.map((temperature) => <><p>{temperature.time}</p>min {temperature.temp_max} / max {temperature.temp_min}</>)}
    </div>
  );
}
