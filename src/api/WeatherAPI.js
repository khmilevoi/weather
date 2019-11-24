const config = {
  appid: "32f6b9edebb1eabda1e30dce91051770"
};

export const createForecastRequest = (...id) =>
  `https://api.openweathermap.org/data/2.5/group?id=${id.join(",")}&appid=${
    config.appid
  }&units=metric`;

export const createForecastRequestByPosition = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.appid}&units=metric`;

export const createHourlyForecastRequest = id =>
  `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${config.appid}&units=metric`;

export const parseDt = dt => {
  const date = new Date(dt * 1000);
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);

  return {
    date,
    hours,
    minutes,
    string: `${date.toDateString()} ${hours}:${minutes}`
  };
};
