const config = {
  host: "localhost",
  port: 8080
};

export const createSearchRequest = name =>
  `http://${config.host}:${config.port}/cities?name=${name}`;
