export const formatDateTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { 
    day: '2-digit', 
    month: 'short', 
    hour: '2-digit', 
    minute: '2-digit', 
    weekday: 'short' 
  };
  
  return date.toLocaleDateString('es-ES', options);
};

