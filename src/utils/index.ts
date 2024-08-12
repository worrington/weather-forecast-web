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
export const formatDateTime = (date: Date, locale?: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    day: '2-digit', 
    month: 'short', 
    weekday: 'short' 
  };
  
  return date.toLocaleDateString(locale ?? 'es-ES', options);
};

/**
 * Converts a 24-hour time string (e.g., "21:00:00") into a 12-hour format with AM/PM.
 *
 * @param {string} time - The time string in 24-hour format ("HH:MM:SS").
 * @param {string} [locale='es-ES'] - Optional. The locale to use for formatting the time string.
 *                                     Defaults to 'es-ES' if not provided.
 * 
 * @returns {string} - The formatted time string in 12-hour format with AM/PM (e.g., "9:00 PM").
 */
export const timeFormat = (time: string, locale?: string): string => {
  const date = new Date();

  const [hours, minutes, seconds] = time.split(":").map(Number);

  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);

  const timeFormat = date.toLocaleString(locale ?? 'es-ES', {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  
  return timeFormat;
};


export const getWeatherIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
