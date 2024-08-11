import apiClient from '../apiClient';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const openWeatherApi = process.env.NEXT_PUBLIC_OPEN_WEATHER_API;

export async function fetchWatherByCity(lat: string, lon: string) {
  try {
    const response = await apiClient.get(
     `${openWeatherApi}?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    return response.data;


  } catch (error) {

    console.error('Error fetching city coordinates:', error);

    throw error;
  }
};