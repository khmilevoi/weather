This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Weather

This app is providing everyone access to "openweathermap" api namely getting today forecast and hourly forecast in increment 3 hours. Also the app can receive current coordinates and display forecast for it.

Such a development stack was used to develop the app:

- redux, react-redux, redux-app
- react-router-dom
- material-ui
- express
- styled-components

The interface was created through Material UI and styled-components. Store management was designed through Redux. Routing was designed through React-router.
Server side was designed for realisation autocomplete city name in search city panel.

Also the app was deployed through "heroku" and located on the [link](https://weather-kh.herokuapp.com)

## Available Scripts

In the project directory, you can run:

### `npm run api`

Firstly run the api for autocomplete city name.

### `npm start`

Secondly run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
