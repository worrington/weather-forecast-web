"use client";

import { useState, useRef } from "react";
import { WeatherByDay } from "@/components/types";
import { formatDateTime } from "@/utils";

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

  return (
    <div className="weather-card bg-white shadow-lg rounded-lg overflow-hidden">
      <div 
        className="weather-card__day p-4 cursor-pointer hover:bg-gray-200"
        onClick={() => handleDayClick(weatherData.day)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleDayClick(weatherData.day)}
      >
        <h2 className="text-xl font-semibold text-blue-700">
          {formatDateTime(new Date(weatherData.day))}
        </h2>
      </div>

      {expandedDay === weatherData.day && (
        <div className="relative p-4">
          {/* Slider buttons */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 w-10 h-10 rounded-full flex items-center justify-center"
            onClick={() => scrollSlider("left")}
          >
            {"<"}
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 w-10 h-10 rounded-full flex items-center justify-center"
            onClick={() => scrollSlider("right")}
          >
            {">"}
          </button>

          {/* Slider container */}
          <div 
            ref={sliderRef} 
            className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth px-12"
          >
            {weatherData.temperatureByTime.map((temperature) => (
              <div key={temperature.time} className="weather-card__temperature-entry flex-shrink-0 w-64 bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col items-center">
                <p className="text-sm font-medium text-blue-900">{temperature.time}</p>
                <p className="text-lg font-bold text-blue-800">
                  {temperature.temp_min}°C / {temperature.temp_max}°C
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
