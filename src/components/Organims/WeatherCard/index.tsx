"use client";

import { useState, useRef } from "react";
import { Climate, ClimateData, Direction, WeatherByDay } from "@/components/types";
import { formatDateTime, getWeatherIconUrl } from "@/utils";
import TemperatureCard from "../TemperatureCard";
import SliderButton from "@/components/Molecules/SliderButton";
import Image from "next/image";


interface WeatherCardProps {
  weatherData: WeatherByDay;
}

const WeatherCard = ({ weatherData }: WeatherCardProps) => {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle day click to toggle expanded state
  const handleDayClick = (day: string) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  // Function to scroll the slider left or right
  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const iconUrl = getWeatherIconUrl(weatherData.temperatureByTime[0].icon);
  return (
    <div className="shadow-lg rounded-lg overflow-hidden my-6" style={{backgroundColor: ClimateData[weatherData.temperatureByTime[0].type].color}}>
      <div 
        className="p-4 cursor-pointer flex content-center"
        onClick={() => handleDayClick(weatherData.day)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleDayClick(weatherData.day)}
      >
        <div>
          <Image src={iconUrl} alt="s" width={150} height={150}/>
        </div>
        <div className="content-center">
          <h2 className="text-xl font-bold text-white text-shadow capitalize">
            {formatDateTime(weatherData.day)}
          </h2>
          <p className="text-white"> Min {weatherData.temp_min}°C / Max {weatherData.temp_max}°C</p>
        </div>
      </div>

      {expandedDay === weatherData.day && (
        <div className="relative p-4">
          <SliderButton icon="<" direction={Direction.Left} scrollSlider={scrollSlider} />
          <div 
            ref={sliderRef} 
            className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth px-8"
          >
            {weatherData.temperatureByTime.map((temperature) => (
             <TemperatureCard key={temperature.time} temperature={temperature}/>
            ))}
          </div>

          <SliderButton icon=">" direction={Direction.Right} scrollSlider={scrollSlider} />
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
