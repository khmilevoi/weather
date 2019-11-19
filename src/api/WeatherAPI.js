const config = {
  appid: "32f6b9edebb1eabda1e30dce91051770"
};

export const createWeatherRequest = (...id) =>
  `https://api.openweathermap.org/data/2.5/weather?id=${id.join(",")}&APPID=${
    config.appid
  }`;
