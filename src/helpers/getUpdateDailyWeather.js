//2------>daily weather update
import { getDayIndex } from "./getDayIndex";
export const updateDailyWeather = (data) => {
  const days = [];
  const dayIndex = getDayIndex(data);

  for (let i = 0; i < 5; i++) {
    days.push({
      date: data.list[dayIndex[i]].dt_txt,
      weather_desc: data.list[dayIndex[i]].weather[0].description,
      icon: data.list[dayIndex[i]].weather[0].icon,
      temp: data.list[dayIndex[i]].main.temp,
      city: data.city.name,
    });
  }
  return days;
};
