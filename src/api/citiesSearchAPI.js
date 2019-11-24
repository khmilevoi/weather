const config = {
  port: 8080,
  host: "localhost"
};

export const createSearchRequest = name =>
  `http://${config.host}:${config.port}/cities?name=${name}`;
