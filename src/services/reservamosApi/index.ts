import apiClient from '../apiClient';

const reservamosApi = process.env.NEXT_PUBLIC_RESERVAMOS_API || "";

export async function fetchCities() {
  try {
    const response = await apiClient.get(
      reservamosApi
    );

    return response.data;


  } catch (error) {

    console.error('Error fetching city coordinates:', error);

    throw error;
  }
};
