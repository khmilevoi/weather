const config = {
  appid: "32f6b9edebb1eabda1e30dce91051770"
};

export const createForecastRequest = (...id) =>
  `https://api.openweathermap.org/data/2.5/weather?id=${id.join(",")}&appid=${
    config.appid
  }&units=metric`;

export const createHourlyForecastRequest = id =>
  `https://http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${config.appid}&units=metric`;
