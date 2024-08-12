"use client";

import Image from "next/image";
import { ClimateData, TemperatureByTime } from "@/components/types";
import { getWeatherIconUrl } from "@/utils";

export default function TemperatureCard({ temperature }: { temperature: TemperatureByTime }) {
  const iconUrl = getWeatherIconUrl(temperature.icon);

  return (
    <div key={temperature.time} className="bg-[#ffffff61] shadow-lg rounded-lg p-4 flex flex-col items-center space-y-4">
      <p className="text-sm font-medium text-gray-800">
        {temperature.time}
      </p>
      <Image 
        src={iconUrl} 
        alt={`${ClimateData[temperature.type].description_en} icon`} 
        width={50} 
        height={50} 
        className="object-contain"
      />
      <p className="text-sm font-medium text-gray-700">
        {ClimateData[temperature.type].description_es}
      </p>
      <p className="text-lg font-bold text-gray-900">
        {temperature.temp}°C
      </p>
      <p><span className="text-[8px] w-24">Min {temperature.temp_min}°C / Max {temperature.temp_max}°C</span></p>
    </div>
  );
}
