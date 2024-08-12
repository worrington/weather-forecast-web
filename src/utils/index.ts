/**
 * Formats a date into the `DD MMM HH:MM` format
 * 
 * This function takes a `Date` object and converts it into a string formatted as `Weekday, DD MMM HH:MM`, where:
 * - `Weekday` is the abbreviated day of the week (e.g., "Mon" for Monday).
 * - `DD` is the two-digit day of the month (e.g., "12").
 * - `MMM` is the abbreviated month in Spanish (e.g., "Aug" for August).
 * - `HH:MM` is the time in 24-hour format with minutes (e.g., "15:00").
 * 
 * @param {Date} date - The `Date` object to format.
 * @returns {string} The formatted date in the `Weekday, DD MMM HH:MM` format.
 */
export const formatDateTime = (date: string, locale?: string): string => {
  const [day, month, year] = date.split("/");

  const formatedDate = new Date(`${year}-${month}-${day}`);

  const options: Intl.DateTimeFormatOptions = { 
    day: '2-digit', 
    month: 'short', 
    weekday: 'short' 
  };
  
  return formatedDate.toLocaleDateString(locale ?? 'es-ES', options);
};

export const getWeatherIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
